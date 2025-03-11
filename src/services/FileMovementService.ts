import { App, Modal, Notice, TFile } from 'obsidian';
import { FileMovement, MoveByTagSettings, TagMappingMatch, MoveScope } from '../models/types';
import { FileUtils } from '../utils/FileUtils';
import { TagMappingService } from './TagMappingService';

export class FileMovementService {
  private app: App;
  private settings: MoveByTagSettings;
  private fileUtils: FileUtils;
  private tagMappingService: TagMappingService;
  private logger: (message: string) => void;

  constructor(
    app: App,
    settings: MoveByTagSettings,
    fileUtils: FileUtils,
    tagMappingService: TagMappingService,
    logger: (message: string) => void
  ) {
    this.app = app;
    this.settings = settings;
    this.fileUtils = fileUtils;
    this.tagMappingService = tagMappingService;
    this.logger = logger;
  }

  /**
   * Move files based on their tags
   * @param scope The scope of files to process (single file, current folder, all folders)
   * @param contextFile The file to use as context (for single file or current folder scope)
   * @returns Result of the operation
   */
  public async moveFiles(
    scope: MoveScope = MoveScope.ALL_FOLDERS, 
    contextFile?: TFile
  ): Promise<{total: number, moved: number}> {
    this.logger(`Starting file movement process with scope: ${scope}`);
    
    // Get the files to process based on scope
    const filesToProcess = await this.getFilesToProcess(scope, contextFile);
    
    if (filesToProcess.length === 0) {
      this.logger('No files to process');
      new Notice('No files to process');
      return { total: 0, moved: 0 };
    }
    
    this.logger(`Found ${filesToProcess.length} files to process`);
    
    const movements: FileMovement[] = [];

    // Plan all movements
    for (const file of filesToProcess) {
      this.logger(`Processing file: ${file.path}`);

      // Skip files in excluded folders (only for ALL_FOLDERS scope)
      if (scope === MoveScope.ALL_FOLDERS && 
          this.fileUtils.isInExcludedFolder(file.path, this.settings.excludedFolders)) {
        this.logger(`Skipping excluded file: ${file.path}`);
        continue;
      }

      const tags = await this.fileUtils.extractTagsFromFile(file);
      this.logger(`Found tags in ${file.path}: ${tags.join(', ') || 'none'}`);

      if (tags.length > 0) {
        const matches = this.tagMappingService.getTargetFolderForTags(tags, this.settings.tagMappings);

        if (matches.length > 0) {
          let targetFolder: string | null = matches[0].mapping.folder;

          // If there are multiple matches, show dialog for user to choose
          if (matches.length > 1) {
            this.logger(`Found multiple matching folders for ${file.path}: ${matches.map(m => m.mapping.folder).join(', ')}`);
            targetFolder = await this.showRuleConflictDialog(file, matches);

            if (!targetFolder) {
              this.logger(`User skipped file ${file.path} due to rule conflict`);
              new Notice(`Skipped ${file.name} due to rule conflict`);
              continue;
            }
          }

          this.logger(`Selected target folder: ${targetFolder}`);
          const targetPath = `${targetFolder}/${file.name}`;

          // Check if file already exists in target
          if (await this.app.vault.adapter.exists(targetPath)) {
            this.logger(`File already exists at target location: ${targetPath}`);
            new Notice(`Skipping ${file.name}: File already exists in target location`);
            continue;
          }

          this.logger(`Planning to move ${file.path} to ${targetPath}`);
          movements.push({ file, targetPath });
        } else {
          this.logger(`No matching folder found for tags: ${tags.join(', ')}`);
        }
      } else {
        this.logger(`No tags found in file: ${file.path}`);
      }
    }

    // If no files to move, notify and return
    if (movements.length === 0) {
      this.logger('No files to move - no valid tag mappings found');
      new Notice('No files to move');
      return { total: 0, moved: 0 };
    }

    this.logger(`Found ${movements.length} files to move`);

    // Show confirmation if enabled
    if (this.settings.confirmBeforeMove) {
      const confirmed = await this.showBatchConfirmationDialog(movements);
      if (!confirmed) {
        new Notice('Operation cancelled');
        return { total: movements.length, moved: 0 };
      }
    }

    // Perform movements
    let successCount = 0;
    for (const { file, targetPath } of movements) {
      try {
        await this.app.vault.rename(file, targetPath);
        successCount++;
        this.logger(`Moved ${file.path} to ${targetPath}`);
      } catch (error) {
        new Notice(`Failed to move ${file.name}: ${error.message}`);
      }
    }

    new Notice(`Successfully moved ${successCount} of ${movements.length} files`);
    return { total: movements.length, moved: successCount };
  }

  /**
   * Get files to process based on scope
   */
  private async getFilesToProcess(scope: MoveScope, contextFile?: TFile): Promise<TFile[]> {
    switch (scope) {
      case MoveScope.SINGLE_FILE:
        if (!contextFile) {
          this.logger('No context file provided for single file scope');
          return [];
        }
        return [contextFile];
        
      case MoveScope.CURRENT_FOLDER:
        if (!contextFile) {
          this.logger('No context file provided for current folder scope');
          return [];
        }
        
        // Get the current folder path
        const currentFolder = contextFile.path.substring(0, contextFile.path.lastIndexOf('/'));
        this.logger(`Processing files in folder: ${currentFolder}`);
        
        // Get all markdown files in the current folder
        return this.app.vault.getMarkdownFiles().filter(file => {
          const fileFolder = file.path.substring(0, file.path.lastIndexOf('/'));
          return fileFolder === currentFolder;
        });
        
      case MoveScope.ALL_FOLDERS:
      default:
        const files = this.app.vault.getMarkdownFiles();
        
        // Apply folder limitations if configured
        if (this.settings.limitedFolders.length > 0) {
          return files.filter(file => 
            this.fileUtils.isInLimitedFolder(file.path, this.settings.limitedFolders)
          );
        }
        
        return files;
    }
  }

  /**
   * Move a single file based on its tags
   */
  public async moveFile(file: TFile): Promise<{total: number, moved: number}> {
    return this.moveFiles(MoveScope.SINGLE_FILE, file);
  }

  /**
   * Show confirmation dialog for a single file move
   */
  private async showConfirmationDialog(file: TFile, targetPath: string): Promise<boolean> {
    return new Promise((resolve) => {
      const modal = new Modal(this.app);
      modal.titleEl.setText('Confirm File Movement');
      
      const { contentEl } = modal;
      
      contentEl.createEl('p', {
        text: `Are you sure you want to move this file?`
      });
      
      const fileInfo = contentEl.createDiv();
      fileInfo.style.margin = '10px 0';
      fileInfo.style.padding = '10px';
      fileInfo.style.backgroundColor = 'var(--background-secondary)';
      fileInfo.style.borderRadius = '4px';
      
      fileInfo.createDiv({
        text: `From: ${file.path}`,
        cls: 'move-confirmation-path'
      });
      
      fileInfo.createDiv({
        text: `To: ${targetPath}`,
        cls: 'move-confirmation-path'
      });
      
      const buttonContainer = contentEl.createDiv();
      buttonContainer.style.display = 'flex';
      buttonContainer.style.justifyContent = 'flex-end';
      buttonContainer.style.marginTop = '20px';
      
      const cancelButton = buttonContainer.createEl('button', {
        text: 'Cancel',
        cls: 'mod-warning'
      });
      cancelButton.style.marginRight = '10px';
      
      const confirmButton = buttonContainer.createEl('button', {
        text: 'Move',
        cls: 'mod-cta'
      });
      
      cancelButton.addEventListener('click', () => {
        modal.close();
        resolve(false);
      });
      
      confirmButton.addEventListener('click', () => {
        modal.close();
        resolve(true);
      });
      
      modal.open();
    });
  }

  /**
   * Show confirmation dialog for batch file movements
   */
  private async showBatchConfirmationDialog(movements: FileMovement[]): Promise<boolean> {
    return new Promise((resolve) => {
      const modal = new Modal(this.app);
      modal.titleEl.setText('Confirm File Movements');
      
      const { contentEl } = modal;
      
      contentEl.createEl('p', {
        text: `You are about to move ${movements.length} file(s). Continue?`
      });
      
      const fileList = contentEl.createEl('div', { cls: 'move-by-tag-file-list' });
      fileList.style.maxHeight = '200px';
      fileList.style.overflow = 'auto';
      fileList.style.marginBottom = '10px';
      fileList.style.border = '1px solid var(--background-modifier-border)';
      fileList.style.borderRadius = '4px';
      fileList.style.padding = '10px';
      
      movements.forEach(({ file, targetPath }) => {
        const item = fileList.createEl('div', { cls: 'move-by-tag-file-item' });
        item.style.marginBottom = '5px';
        item.style.display = 'flex';
        
        const fromEl = item.createSpan({ text: file.path });
        fromEl.style.marginRight = '10px';
        
        const arrowEl = item.createSpan({ text: '→' });
        arrowEl.style.margin = '0 10px';
        arrowEl.style.color = 'var(--text-muted)';
        
        const toEl = item.createSpan({ text: targetPath });
      });
      
      const buttonContainer = contentEl.createDiv();
      buttonContainer.style.display = 'flex';
      buttonContainer.style.justifyContent = 'flex-end';
      buttonContainer.style.marginTop = '20px';
      
      const cancelButton = buttonContainer.createEl('button', {
        text: 'Cancel',
        cls: 'mod-warning'
      });
      cancelButton.style.marginRight = '10px';
      
      const confirmButton = buttonContainer.createEl('button', {
        text: 'Move Files',
        cls: 'mod-cta'
      });
      
      cancelButton.addEventListener('click', () => {
        modal.close();
        resolve(false);
      });
      
      confirmButton.addEventListener('click', () => {
        modal.close();
        resolve(true);
      });
      
      modal.open();
    });
  }

  /**
   * Show rule conflict dialog
   */
  private async showRuleConflictDialog(file: TFile, matches: TagMappingMatch[]): Promise<string | null> {
    return new Promise((resolve) => {
      const modal = new Modal(this.app);
      modal.titleEl.setText('Multiple Rules Match');
      
      const { contentEl } = modal;
      
      contentEl.createEl('p', {
        text: `Multiple rules match the file "${file.name}". Please select which folder to use:`
      });
      
      const container = contentEl.createEl('div');
      
      const list = container.createEl('div');
      
      // Create a form to hold the radio buttons
      const form = list.createEl('form', { cls: 'move-by-tag-rule-form' });
      
      // Add some styling to the form
      form.style.marginBottom = '10px';
      
      // Prevent default form submission
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      });
      
      // Create radio buttons for each option
      matches.forEach(({ mapping, matchedTags }, index) => {
        const row = form.createEl('div', { cls: 'move-by-tag-rule-option' });
        row.style.marginBottom = '10px';
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        
        // Create radio button
        const radio = row.createEl('input', {
          type: 'radio',
          attr: {
            name: 'folder-option',
            id: `folder-option-${index}`,
            value: mapping.folder
          }
        });
        
        // Select the first option by default
        if (index === 0) {
          radio.checked = true;
        }
        
        // Create label for the radio button
        const label = row.createEl('label', {
          text: `Move to ${mapping.folder} (tags: ${mapping.tags.map(t => '#' + t).join(' + ')})`,
          attr: { for: `folder-option-${index}` }
        });
        label.style.marginLeft = '10px';
        label.style.cursor = 'pointer';
      });
      
      // Add "Skip this file" as the last radio option
      const skipRow = form.createEl('div', { cls: 'move-by-tag-rule-option' });
      skipRow.style.marginBottom = '10px';
      skipRow.style.display = 'flex';
      skipRow.style.alignItems = 'center';
      
      const skipRadio = skipRow.createEl('input', {
        type: 'radio',
        attr: {
          name: 'folder-option',
          id: 'folder-option-skip',
          value: 'skip'
        }
      });
      
      const skipLabel = skipRow.createEl('label', {
        text: 'Skip this file',
        attr: { for: 'folder-option-skip' }
      });
      skipLabel.style.marginLeft = '10px';
      skipLabel.style.cursor = 'pointer';
      
      // Add a submit button at the bottom
      const submitButton = form.createEl('button', {
        text: 'Continue',
        cls: 'mod-cta',
        attr: {
          type: 'button' // Explicitly set type to button to prevent form submission
        }
      });
      
      submitButton.addEventListener('click', () => {
        // Find the selected radio button
        const selectedRadio = form.querySelector('input[name="folder-option"]:checked') as HTMLInputElement;
        if (selectedRadio) {
          modal.close();
          // If "Skip" was selected, resolve with null
          if (selectedRadio.value === 'skip') {
            resolve(null);
          } else {
            resolve(selectedRadio.value);
          }
        } else {
          // If somehow no option is selected, use the first one
          if (matches.length > 0) {
            modal.close();
            resolve(matches[0].mapping.folder);
          } else {
            modal.close();
            resolve(null);
          }
        }
      });

      modal.onClose = () => {
        // Clean up suggestions when modal is closed
        const suggestionsContainer = document.getElementById('folder-suggestions');
        if (suggestionsContainer) {
          suggestionsContainer.remove();
        }
      };
      
      modal.open();
    });
  }
} 