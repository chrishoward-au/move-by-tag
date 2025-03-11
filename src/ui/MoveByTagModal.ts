import { App, Modal, Notice, Setting, TFile } from 'obsidian';
import { FileMovement, MoveByTagSettings, TagMappingMatch } from '../models/types';
import { FileUtils } from '../utils/FileUtils';
import { TagMappingService } from '../services/TagMappingService';

export class MoveByTagModal extends Modal {
  private settings: MoveByTagSettings;
  private fileUtils: FileUtils;
  private tagMappingService: TagMappingService;
  private logger: (message: string) => void;

  constructor(app: App, settings: MoveByTagSettings, logger: (message: string) => void) {
    super(app);
    this.settings = settings;
    this.fileUtils = new FileUtils(app);
    this.tagMappingService = new TagMappingService();
    this.logger = logger;
  }

  private async showConfirmationDialog(movements: FileMovement[]): Promise<boolean> {
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
      
      movements.forEach(({ file, targetPath }) => {
        const item = fileList.createEl('div', { cls: 'move-by-tag-file-item' });
        item.createEl('span', { text: `${file.path} → ${targetPath}` });
      });
      
      new Setting(contentEl)
        .addButton(btn => btn
          .setButtonText('Cancel')
          .onClick(() => {
            modal.close();
            resolve(false);
          }))
        .addButton(btn => btn
          .setButtonText('Move Files')
          .setCta()
          .onClick(() => {
            modal.close();
            resolve(true);
          }));
      
      modal.open();
    });
  }

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

  async moveFilesByTag(): Promise<void> {
    const { vault } = this.app;
    try {
      this.logger('Starting file movement process...');
      const files = this.app.vault.getMarkdownFiles().filter(file => {
        return this.fileUtils.isInLimitedFolder(file.path, this.settings.limitedFolders);
      });
      this.logger(`Found ${files.length} markdown files total`);

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

      // If no files to move, notify and close
      if (movements.length === 0) {
        this.logger('No files to move - no valid tag mappings found');
        new Notice('No files to move');
        this.close();
        return;
      }

      this.logger(`Found ${movements.length} files to move`);

      // Show confirmation if enabled
      if (this.settings.confirmBeforeMove) {
        const confirmed = await this.showConfirmationDialog(movements);
        if (!confirmed) {
          new Notice('Operation cancelled');
          return;
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
      this.close();
    } catch (error) {
      new Notice(`Error during file movement: ${error.message}`);
      console.error('Move by Tag error:', error);
      this.close();
    }
  }
}
