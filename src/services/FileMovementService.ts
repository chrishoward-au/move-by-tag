import { App, Modal, Notice, TFile } from 'obsidian';
import { FileMovement, MoveByTagSettings, TagMappingMatch } from '../models/types';
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
   * Move a single file based on its tags
   */
  public async moveFile(file: TFile): Promise<boolean> {
    try {
      this.logger(`Processing file: ${file.path}`);

      // Skip files in excluded folders
      if (this.fileUtils.isInExcludedFolder(file.path, this.settings.excludedFolders)) {
        this.logger(`Skipping excluded file: ${file.path}`);
        return false;
      }

      const tags = await this.fileUtils.extractTagsFromFile(file);
      this.logger(`Found tags in ${file.path}: ${tags.join(', ') || 'none'}`);

      if (tags.length === 0) {
        this.logger(`No tags found in file: ${file.path}`);
        new Notice(`No tags found in file: ${file.name}`);
        return false;
      }

      const matches = this.tagMappingService.getTargetFolderForTags(tags, this.settings.tagMappings);

      if (matches.length === 0) {
        this.logger(`No matching folder found for tags: ${tags.join(', ')}`);
        new Notice(`No matching folder found for tags: ${tags.join(', ')}`);
        return false;
      }

      let targetFolder: string | null = matches[0].mapping.folder;

      // If there are multiple matches, show dialog for user to choose
      if (matches.length > 1) {
        this.logger(`Found multiple matching folders for ${file.path}: ${matches.map(m => m.mapping.folder).join(', ')}`);
        targetFolder = await this.showRuleConflictDialog(file, matches);

        if (!targetFolder) {
          this.logger(`User skipped file ${file.path} due to rule conflict`);
          new Notice(`Skipped ${file.name} due to rule conflict`);
          return false;
        }
      }

      this.logger(`Selected target folder: ${targetFolder}`);
      const targetPath = `${targetFolder}/${file.name}`;

      // Check if file already exists in target
      if (await this.app.vault.adapter.exists(targetPath)) {
        this.logger(`File already exists at target location: ${targetPath}`);
        new Notice(`Skipping ${file.name}: File already exists in target location`);
        return false;
      }

      // Show confirmation if enabled
      if (this.settings.confirmBeforeMove) {
        const confirmed = await this.showConfirmationDialog(file, targetPath);
        if (!confirmed) {
          new Notice('Operation cancelled');
          return false;
        }
      }

      // Perform the move
      try {
        await this.app.vault.rename(file, targetPath);
        this.logger(`Moved ${file.path} to ${targetPath}`);
        new Notice(`Successfully moved ${file.name} to ${targetFolder}`);
        return true;
      } catch (error) {
        new Notice(`Failed to move ${file.name}: ${error.message}`);
        return false;
      }
    } catch (error) {
      new Notice(`Error processing file: ${error.message}`);
      console.error('Move by Tag error:', error);
      return false;
    }
  }

  /**
   * Move multiple files based on their tags
   */
  public async moveFiles(files: TFile[]): Promise<{ success: number; total: number }> {
    try {
      this.logger('Starting file movement process...');
      
      const movements: FileMovement[] = [];

      // First, plan all movements
      for (const file of files) {
        this.logger(`Processing file: ${file.path}`);

        // Skip files in excluded folders
        if (this.fileUtils.isInExcludedFolder(file.path, this.settings.excludedFolders)) {
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
        return { success: 0, total: 0 };
      }

      this.logger(`Found ${movements.length} files to move`);

      // Show confirmation if enabled
      if (this.settings.confirmBeforeMove) {
        const confirmed = await this.showBatchConfirmationDialog(movements);
        if (!confirmed) {
          new Notice('Operation cancelled');
          return { success: 0, total: movements.length };
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
      return { success: successCount, total: movements.length };
    } catch (error) {
      new Notice(`Error during file movement: ${error.message}`);
      console.error('Move by Tag error:', error);
      return { success: 0, total: 0 };
    }
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
        type: 'button' // Prevent form submission
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