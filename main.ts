import { Plugin, Modal, App, Command, Setting, Notice, TFile, PluginSettingTab, TextComponent } from 'obsidian';

console.log('Loading Move by Tag Plugin');

interface TagMapping {
  tags: string[];
  folder: string;
  id: string; // Unique identifier for the mapping
}

interface MoveByTagSettings {
  tagMappings: TagMapping[];
  confirmBeforeMove: boolean;
  excludedFolders: string[];
  limitedFolders: string[];
  enableLogging: boolean;
}

const DEFAULT_SETTINGS: MoveByTagSettings = {
  tagMappings: [],
  confirmBeforeMove: true,
  excludedFolders: [],
  limitedFolders: [],
  enableLogging: true
};

export default class MoveByTag extends Plugin {
  settings: MoveByTagSettings;

  public log(message: string) {
    if (this.settings.enableLogging) {
      console.log(`[Move by Tag] ${message}`);
    }
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  async onload() {
    await this.loadSettings();

    // This adds a command to the app's command palette.
    this.addCommand({
      id: 'move-by-tag',
      name: 'Move by Tag',
      callback: async () => {
        const modal = new MoveByTagModal(this.app, this);
        modal.onClose = () => {
      // Clean up suggestions when modal is closed
      const suggestionsContainer = document.getElementById('folder-suggestions');
      if (suggestionsContainer) {
        suggestionsContainer.remove();
      }
    };
   modal.open();
      },
    });

    // Register the command in Obsidian
    this.addCommand({
      id: 'show-file-info',
      name: 'Show File Info',
      checkCallback: (checking: boolean) => {
        const activeFile = this.app.workspace.getActiveFile();
        if (activeFile) {
          if (!checking) {
            this.showFileInfo(activeFile);
          }
          return true;
        }
        return false;
      }
    });

    this.addSettingTab(new MoveByTagSettingTab(this.app, this));

    console.log('Move by Tag Plugin loaded');
    
  }

  async onunload() {
    console.log('Move by Tag Plugin unloaded');
    // Reset settings to default
    // this.settings = Object.assign({}, DEFAULT_SETTINGS);
    // await this.saveData({}); // Clear all stored data
  }

  extractTags(content: string): string[] {
    const tagRegex = /#\w+/g;
    return content.match(tagRegex) || [];
  }

  async showFileInfo(file: any) {
    const content = await this.app.vault.read(file);
    this.showFileInfoDialog(file.path, content);
  }

  showFileInfoDialog(filePath: string, content: string) {
    const fileName = filePath.split('/').pop();
    const tags = this.extractTags(content);

    const dialogContent = `File Name: ${fileName}\nLocation: ${filePath}\nTags: ${tags.join(', ')}`;

    const dialog = new InfoDialog(this.app, dialogContent);
    dialog.open();
  }

  async loadSettings() {
    const loadedData = await this.loadData();
    console.log('Loaded settings data:', loadedData);

    // Initialize settings with defaults
    this.settings = { ...DEFAULT_SETTINGS };

    // Check if tagMappings is an object (old format)
    if (loadedData && loadedData.tagMappings && typeof loadedData.tagMappings === 'object' && !Array.isArray(loadedData.tagMappings)) {
      // Convert old format to new format
      const oldMappings: Record<string, string> = loadedData.tagMappings;
      const convertedMappings: TagMapping[] = [];

      // Group mappings by folder
      const folderToTags: Record<string, string[]> = {};
      Object.entries(oldMappings).forEach(([tag, folder]) => {
        if (!folderToTags[folder]) {
          folderToTags[folder] = [];
        }
        folderToTags[folder].push(tag);
      });

      // Create new mappings
      Object.entries(folderToTags).forEach(([folder, tags]) => {
        convertedMappings.push({
          tags: tags,
          folder: folder,
          id: this.generateId()
        });
      });

      this.settings.tagMappings = convertedMappings;
    } else if (loadedData && loadedData.tagMappings) {
      // If not in old format, assign directly
      this.settings.tagMappings = loadedData.tagMappings;
    }

    // Merge loaded data with settings
    if (loadedData) {
      this.settings = {
        ...this.settings,
        confirmBeforeMove: loadedData.confirmBeforeMove ?? DEFAULT_SETTINGS.confirmBeforeMove,
        excludedFolders: loadedData.excludedFolders ?? DEFAULT_SETTINGS.excludedFolders,
        limitedFolders: loadedData.limitedFolders ?? DEFAULT_SETTINGS.limitedFolders,
        enableLogging: loadedData.enableLogging ?? DEFAULT_SETTINGS.enableLogging
      };
    }

    console.log('Loaded excluded folders:', this.settings.excludedFolders);
    console.log('Loaded limited folders:', this.settings.limitedFolders);
  }

  async saveSettings() {
    console.log('Saving settings data:', this.settings);
    await this.saveData(this.settings);
  }
}

class MoveByTagModal extends Modal {
  private settings: MoveByTagSettings;
  private plugin: MoveByTag;

  constructor(app: App, plugin: MoveByTag) {
    super(app);
    this.settings = plugin.settings;
    this.plugin = plugin;
  }

  private async showConfirmationDialog(movements: Array<{ file: TFile; targetPath: string }>): Promise<boolean> {
    return new Promise((resolve) => {
      const modal = new Modal(this.app);
      modal.contentEl.createEl('h2', { text: 'Confirm File Movements' });

      const container = modal.contentEl.createEl('div', { cls: 'move-by-tag-confirmation' });
      container.createEl('p', { text: `About to move ${movements.length} files:` });

      const list = container.createEl('ul');
      movements.slice(0, 10).forEach(({ file, targetPath }) => {
        list.createEl('li', { text: `${file.path} → ${targetPath}` });
      });

      if (movements.length > 10) {
        container.createEl('p', { text: `...and ${movements.length - 10} more files` });
      }

      const buttonContainer = container.createEl('div', { cls: 'move-by-tag-buttons' });

      buttonContainer.createEl('button', { text: 'Cancel' })
        .addEventListener('click', () => {
          modal.close();
          resolve(false);
        });

      buttonContainer.createEl('button', { text: 'Confirm' })
        .addEventListener('click', () => {
          modal.close();
          resolve(true);
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

  onOpen() {
    const { contentEl } = this;
    contentEl.setText('Move files based on their tags');
    this.plugin.log('Opening Move by Tag modal');

    // Add a button to trigger the file movement process
    new Setting(contentEl)
      .addButton((btn) => btn
        .setButtonText('Move Files')
        .onClick(async () => {
          await this.moveFilesByTag();
        }));
  }

  async moveFilesByTag(): Promise<void> {
    const { vault } = this.app;
    try {
      this.plugin.log('Starting file movement process...');
      const files = this.app.vault.getMarkdownFiles().filter(file => {
        return this.settings.limitedFolders.length === 0 ||
          this.settings.limitedFolders.some(folder => file.path.startsWith(folder));
      });
      this.plugin.log(`Found ${files.length} markdown files total`);

      const movements: Array<{ file: TFile; targetPath: string }> = [];

      // First, plan all movements
      for (const file of files) {
        this.plugin.log(`Processing file: ${file.path}`);

        // Normalize file path
        const normalizedFilePath = file.path.startsWith('/') ? file.path : '/' + file.path;

        // Skip files in excluded folders
        if (this.settings.excludedFolders.some(folder => {
          const normalizedFolder = folder.startsWith('/') ? folder : '/' + folder;
          return normalizedFilePath.startsWith(normalizedFolder);
        })) {
          this.plugin.log(`Skipping excluded file: ${file.path}`);
          continue;
        }

        const tags = await this.extractTags(file);
        this.plugin.log(`Found tags in ${file.path}: ${tags.join(', ') || 'none'}`);

        if (tags.length > 0) {
          const matches = this.getTargetFolderForTags(tags);

          if (matches.length > 0) {
            let targetFolder: string | null = matches[0].mapping.folder;

            // If there are multiple matches, show dialog for user to choose
            if (matches.length > 1) {
              this.plugin.log(`Found multiple matching folders for ${file.path}: ${matches.map(m => m.mapping.folder).join(', ')}`);
              targetFolder = await this.showRuleConflictDialog(file, matches);

              if (!targetFolder) {
                this.plugin.log(`User skipped file ${file.path} due to rule conflict`);
                new Notice(`Skipped ${file.name} due to rule conflict`);
                continue;
              }
            }

            this.plugin.log(`Selected target folder: ${targetFolder}`);
            const targetPath = `${targetFolder}/${file.name}`;

            // Check if file already exists in target
            if (await this.app.vault.adapter.exists(targetPath)) {
              this.plugin.log(`File already exists at target location: ${targetPath}`);
              new Notice(`Skipping ${file.name}: File already exists in target location`);
              continue;
            }

            this.plugin.log(`Planning to move ${file.path} to ${targetPath}`);
            movements.push({ file, targetPath });
          } else {
            this.plugin.log(`No matching folder found for tags: ${tags.join(', ')}`);
          }
        } else {
          this.plugin.log(`No tags found in file: ${file.path}`);
        }
      }

      // If no files to move, notify and close
      if (movements.length === 0) {
        this.plugin.log('No files to move - no valid tag mappings found');
        new Notice('No files to move');
        this.close();
        return;
      }

      this.plugin.log(`Found ${movements.length} files to move`);

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
          if (this.settings.enableLogging) {
            console.log(`Moved ${file.path} to ${targetPath}`);
          }
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

  async extractTags(file: TFile): Promise<string[]> {
    try {
      this.plugin.log(`Reading content from file: ${file.path}`);
      const content = await this.app.vault.read(file);
      const tagRegex = /#([\w-]+)/g;
      const tags = [];
      let match;
      while ((match = tagRegex.exec(content)) !== null) {
        tags.push(match[1]);
      }
      this.plugin.log(`Extracted tags from ${file.path}: ${tags.join(', ') || 'none'}`);
      return tags;
    } catch (error) {
      this.plugin.log(`Error extracting tags from ${file.path}: ${error.message}`);
      return [];
    }
  }

  getTargetFolderForTags(fileTags: string[]): Array<{ mapping: TagMapping; matchedTags: string[] }> {
    if (this.settings.tagMappings.length === 0) {
      new Notice('No mappings defined.');
      return [];
    }

    this.plugin.log(`Checking tag mappings for tags: ${fileTags.join(', ')}`);
    this.plugin.log(`Available mappings: ${JSON.stringify(this.settings.tagMappings)}`);

    // Convert file tags to lowercase for case-insensitive matching
    const lowerFileTags = fileTags.map(tag => tag.toLowerCase());
    const matches: Array<{ mapping: TagMapping; matchedTags: string[] }> = [];

    // Check each mapping
    for (const mapping of this.settings.tagMappings) {
      // Convert mapping tags to lowercase
      const lowerMappingTags = mapping.tags.map(tag => tag.toLowerCase());

      // Track which tags from the mapping were found in the file
      const matchedTags: string[] = [];

      // Check each tag in the mapping
      for (const mappingTag of mapping.tags) {
        const lowerMappingTag = mappingTag.toLowerCase();

        // Check if any file tag matches this mapping tag
        const matchingFileTag = lowerFileTags.find(fileTag =>
          fileTag === lowerMappingTag ||
          fileTag === lowerMappingTag + 's' ||
          fileTag.slice(0, -1) === lowerMappingTag
        );

        if (matchingFileTag) {
          matchedTags.push(mappingTag);
        }
      }

      // If all tags in the mapping were found, it's a match
      if (matchedTags.length === mapping.tags.length) {
        this.plugin.log(`Found matching mapping: ${mapping.tags.join(' + ')} → ${mapping.folder}`);
        matches.push({ mapping, matchedTags });
      }
    }

    if (matches.length === 0) {
      this.plugin.log('No matching folder found for tags');
    }

    return matches;
  }

  private async showRuleConflictDialog(file: TFile, matches: Array<{ mapping: TagMapping; matchedTags: string[] }>): Promise<string | null> {
    return new Promise((resolve) => {
      const modal = new Modal(this.app);
      modal.titleEl.setText(`"${file.name}"`);

      const container = modal.contentEl.createEl('div');
      container.createEl('p', {
        text: `This file matches multiple tag rules. Please select which folder to move it to:`
      });

      const list = container.createEl('div');
      matches.forEach(({ mapping, matchedTags }) => {
        const row = list.createEl('div', { cls: 'move-by-tag-rule-option' });

        const button = row.createEl('button', {
          text: `Move to ${mapping.folder} (tags: ${mapping.tags.map(t => '#' + t).join(' + ')})`,
          cls: 'mod-cta'
        });
        button.style.marginBottom = '10px'; // Add margin to the bottom of the button

        button.addEventListener('click', () => {
          modal.close();
          resolve(mapping.folder);
        });
      });

      // Add cancel button
      const cancelButton = container.createEl('button', {
        text: 'Skip this file',
        cls: 'move-by-tag-cancel'
      });

      cancelButton.addEventListener('click', () => {
        modal.close();
        resolve(null);
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

class InfoDialog extends Modal {
  private content: string;

  constructor(app: App, content: string) {
    super(app);
    this.content = content;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.setText(this.content);
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
}

class MoveByTagSettingTab extends PluginSettingTab {
  private folderInput: TextComponent; // Declare folderInput here
  plugin: MoveByTag;

  constructor(app: App, plugin: MoveByTag) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    // General Settings Section
    containerEl.createEl('h3', { text: 'General Settings' });

    new Setting(containerEl)
      .setName('Confirm Before Moving')
      .setDesc('Show confirmation dialog before moving files')
      .addToggle(toggle => toggle
        .setValue(this.plugin.settings.confirmBeforeMove)
        .onChange(async (value) => {
          this.plugin.settings.confirmBeforeMove = value;
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl)
      .setName('Enable Logging')
      .setDesc('Log file movements to console')
      .addToggle(toggle => toggle
        .setValue(this.plugin.settings.enableLogging)
        .onChange(async (value) => {
          this.plugin.settings.enableLogging = value;
          await this.plugin.saveSettings();
        }));

    // Excluded Folders Section
    containerEl.createEl('h3', { text: 'Excluded Folders' });
    containerEl.createEl('p', {
      text: 'Files in these folders will not be moved. One folder path per line.',
      cls: 'setting-item-description'
    });

    new Setting(containerEl)
      .addTextArea(text => {
        // Set initial value from settings
        const excludedFolders = this.plugin.settings.excludedFolders || [];
        text.setValue(excludedFolders.join('\n'))
          .setPlaceholder('folder1/subfolder\nfolder2')
          .onChange(async (value) => {
            this.plugin.settings.excludedFolders = value.split('\n')
              .map(f => f.trim())
              .filter(f => f.length > 0);
            await this.plugin.saveSettings();
          });
      });

    // Specific Folders Section
    containerEl.createEl('h3', { text: 'Specific Folders' });
    containerEl.createEl('p', {
      text: 'Files will only be moved from these folders. One folder path per line.',
      cls: 'setting-item-description'
    });

    new Setting(containerEl)
      .addTextArea(text => {
        // Set initial value from settings
        const limitedFolders = this.plugin.settings.limitedFolders || [];
        text.setValue(limitedFolders.join('\n'))
          .setPlaceholder('folder1/subfolder\nfolder2')
          .onChange(async (value) => {
            this.plugin.settings.limitedFolders = value.split('\n')
              .map(f => f.trim())
              .filter(f => f.length > 0);
            await this.plugin.saveSettings();
          });
      });

    // Tag Mappings Section
    containerEl.createEl('h3', { text: 'Tag Mappings' });
    containerEl.createEl('p', {
      text: 'Define where files should be moved based on their tags.',
      cls: 'setting-item-description'
    });

    // Add New Mapping and Delete All Buttons at the top
    new Setting(containerEl)
      .addButton(button => button
        .setButtonText('Add New Mapping')
        .setCta() // Make it stand out as the primary action
        .onClick(() => this.showNewMappingModal()));

    // Existing Mappings
    const mappingsContainer = containerEl.createDiv('tag-mappings-container');

    if (this.plugin.settings.tagMappings.length === 0) {
      mappingsContainer.createEl('p', {
        text: 'No tag mappings defined yet. Click "Add New Mapping" to create one.',
        cls: 'setting-item-description'
      });
    }

    // Sort mappings by first tag
    const sortedMappings = [...this.plugin.settings.tagMappings]
      .sort((a, b) => a.tags[0].localeCompare(b.tags[0]));

    for (const mapping of sortedMappings) {
      const tagDisplay = mapping.tags.map(t => '#' + t).join(' + ');

      new Setting(mappingsContainer)
        .setName(tagDisplay)
        .setDesc(`Current destination: ${mapping.folder}`)
        .addButton(button => button
          .setButtonText('Edit')
          .onClick(() => {
            this.showEditMappingModal(mapping);
          }));
      // .addButton(button => button
      //   .setIcon('trash')
      //   .setTooltip('Delete mapping')
      //   .onClick(async () => {
      //     if (await this.showDeleteConfirmation(mapping)) {
      //       this.plugin.settings.tagMappings = this.plugin.settings.tagMappings
      //         .filter(m => m.id !== mapping.id);
      //       await this.plugin.saveSettings();
      //       this.display();
      //     }
      //   }));
    };
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private async showNewMappingModal(): Promise<void> {
    const modal = new Modal(this.app);
    modal.titleEl.setText('Create New Tag Mapping');

    const contentEl = modal.contentEl;
    let tagsInput: TextComponent;

    // Tags input
    new Setting(contentEl)
      .setName('Tags')
      .setDesc('Enter tags without # symbol, separated by commas. All tags must be present for the rule to apply.')
      .addText(text => {
        tagsInput = text;
        text.setPlaceholder('tag1, tag2, tag3');
      });

    // Folder input
    const folderSetting = new Setting(contentEl)
      .setName('Destination Folder')
      .addText((text) => {
        this.folderInput = text;
        text.setPlaceholder('folder/subfolder');
        text.inputEl.style.width = '300px'; // Make input field wider
        text.onChange(async (value) => {
            const results = await this.searchFolders(value);
            this.displayFolderSuggestions(results);
          });
      });

    // Buttons
    new Setting(contentEl)
      .addButton(button => button
        .setButtonText('Cancel')
        .onClick(() => modal.close()))
      .addButton(button => button
        .setButtonText('Add')
        .setCta()
        .onClick(async () => {
          const tagsValue = tagsInput.getValue().trim();
          const folder = this.folderInput.getValue().trim();

          if (!tagsValue || !folder) {
            new Notice('Both tags and folder are required');
            return;
          }

          const tags = tagsValue.split(',').map(t => t.trim()).filter(t => t.length > 0);
          if (tags.length === 0) {
            new Notice('At least one tag is required');
            return;
          }

          // Check for duplicate tag combinations
          const tagSet = new Set(tags.map(t => t.toLowerCase()));
          if (this.plugin.settings.tagMappings.some(m =>
            m.tags.length === tags.length &&
            m.tags.every(t => tagSet.has(t.toLowerCase()))
          )) {
            new Notice('This tag combination already has a mapping');
            return;
          }

          const newMapping: TagMapping = {
            id: this.generateId(),
            tags,
            folder
          };

          this.plugin.settings.tagMappings.push(newMapping);
          await this.plugin.saveSettings();
          this.display();
          modal.close();
        }));

    modal.onClose = () => {
      // Clean up suggestions when modal is closed
      const suggestionsContainer = document.getElementById('folder-suggestions');
      if (suggestionsContainer) {
        suggestionsContainer.remove();
      }
    };
    
    modal.open();
  }

  private async searchFolders(query: string): Promise<string[]> {
    if (!query) return [];
    
    const folders = this.app.vault.getAllFolders();
    console.log('All folders:', folders);
    
    let folderPaths = folders.map(folder => {
      // Ensure leading slash for root-level folders
      return folder.path === '/' ? '/' : (folder.path.startsWith('/') ? folder.path : '/' + folder.path);
    });

    // If limited folders are set, only show folders within those paths
    if (this.plugin.settings.limitedFolders.length > 0) {
      const normalizedLimitedFolders = this.plugin.settings.limitedFolders.map(folder => 
        folder.startsWith('/') ? folder : '/' + folder
      );
      
      folderPaths = folderPaths.filter(path => 
        normalizedLimitedFolders.some(limitedFolder => 
          path.startsWith(limitedFolder) || limitedFolder.startsWith(path)
        )
      );
    }
    
    // Apply search query filter
    folderPaths = folderPaths
      .filter(path => path.toLowerCase().includes(query.toLowerCase()))
      .sort();
    
    return folderPaths;
  }

  private displayFolderSuggestions(folders: string[]) {
    // Clear previous suggestions
    const existingSuggestions = document.querySelectorAll('.folder-suggestions-container');
    existingSuggestions.forEach(el => el.remove());

    if (folders.length === 0) return;

    // Create a new suggestions container
    const newContainer = document.createElement('div');
    newContainer.className = 'folder-suggestions-container';
    newContainer.style.position = 'absolute';
    newContainer.style.backgroundColor = 'var(--background-primary)';
    newContainer.style.border = '1px solid var(--background-modifier-border)';
    newContainer.style.borderRadius = '4px';
    newContainer.style.zIndex = '1000';
    newContainer.style.boxShadow = '0 2px 8px var(--background-modifier-box-shadow)';

    // Add suggestions to the container
    folders.forEach(folder => {
      const suggestionItem = document.createElement('div');
      suggestionItem.className = 'folder-suggestion-item';
      suggestionItem.textContent = folder;
      suggestionItem.style.padding = '8px 12px';
      suggestionItem.style.cursor = 'pointer';
      suggestionItem.style.transition = 'background-color 0.1s ease';

      // Hover effect
      suggestionItem.addEventListener('mouseover', () => {
        suggestionItem.style.backgroundColor = 'var(--background-modifier-hover)';
      });
      suggestionItem.addEventListener('mouseout', () => {
        suggestionItem.style.backgroundColor = '';
      });

      // Click event
      suggestionItem.addEventListener('click', () => {
        this.folderInput.setValue(folder);
        newContainer.remove();
      });

      newContainer.appendChild(suggestionItem);
    });

    // Position the suggestions container
    const inputEl = this.folderInput.inputEl;
    const rect = inputEl.getBoundingClientRect();
    const modalEl = inputEl.closest('.modal');
    const modalRect = modalEl?.getBoundingClientRect();
    
    newContainer.style.position = 'fixed';
    newContainer.style.left = `${rect.left}px`;
    newContainer.style.top = `${rect.bottom + 4}px`; // Add small gap
    newContainer.style.width = `${Math.min(modalRect ? modalRect.width - 40 : 300, 300)}px`;
    newContainer.style.maxHeight = '200px';
    newContainer.style.overflowY = 'auto';
    newContainer.style.overflowX = 'hidden';

    // Add click outside listener
    const clickOutsideHandler = (e: MouseEvent) => {
      if (!newContainer.contains(e.target as Node) && e.target !== inputEl) {
        newContainer.remove();
        document.removeEventListener('click', clickOutsideHandler);
      }
    };
    // Delay adding the click listener to prevent immediate triggering
    setTimeout(() => {
      document.addEventListener('click', clickOutsideHandler);
    }, 0);

    document.body.appendChild(newContainer);
  }

  private async showEditMappingModal(mapping: TagMapping): Promise<void> {
    const modal = new Modal(this.app);
    modal.titleEl.setText('Edit Tag Mapping');

    const contentEl = modal.contentEl;
    let tagsInput: TextComponent;

    // Tags input
    new Setting(contentEl)
      .setName('Tags')
      .setDesc('Enter tags without # symbol, separated by commas. All tags must be present for the rule to apply.')
      .addText(text => {
        tagsInput = text;
        text.setPlaceholder('tag1, tag2, tag3')
          .setValue(mapping.tags.join(', '));
      });

    // Folder input with dropdown
    const folderSetting = new Setting(contentEl)
      .setName('Destination Folder')
      .addText((text) => {
        this.folderInput = text;
        text.setPlaceholder('folder/subfolder');
        text.inputEl.style.width = '300px'; // Make input field wider
        text.onChange(async (value) => {
          const results = await this.searchFolders(value);
          this.displayFolderSuggestions(results);
        });
        text.setValue(mapping.folder);
      });

    // Buttons
    new Setting(contentEl)
      .addButton(button => button
        .setButtonText('Cancel')
        .onClick(() => modal.close()))
      .addButton(button => button
        .setButtonText('Save')
        .setCta()
        .onClick(async () => {
          const tagsValue = tagsInput.getValue().trim();
          const folder = this.folderInput.getValue().trim();

          if (!tagsValue || !folder) {
            new Notice('Both tags and folder are required');
            return;
          }

          const tags = tagsValue.split(',').map(t => t.trim()).filter(t => t.length > 0);
          if (tags.length === 0) {
            new Notice('At least one tag is required');
            return;
          }

          // Check for duplicate tag combinations, excluding the current mapping
          const tagSet = new Set(tags.map(t => t.toLowerCase()));
          if (this.plugin.settings.tagMappings.some(m =>
            m.id !== mapping.id && // Exclude current mapping
            m.tags.length === tags.length &&
            m.tags.every(t => tagSet.has(t.toLowerCase()))
          )) {
            new Notice('This tag combination already has a mapping');
            return;
          }

          // Update the existing mapping
          mapping.tags = tags;
          mapping.folder = folder;

          await this.plugin.saveSettings();
          this.display();
          modal.close();
        }));

    modal.onClose = () => {
      // Clean up suggestions when modal is closed
      const suggestionsContainer = document.getElementById('folder-suggestions');
      if (suggestionsContainer) {
        suggestionsContainer.remove();
      }
    };
    
    modal.open();
  }

  private async showDeleteAllConfirmation(): Promise<boolean> {
    return new Promise((resolve) => {
      const modal = new Modal(this.app);
      modal.titleEl.setText('Delete All Tag Mappings');

      const contentEl = modal.contentEl;
      contentEl.createEl('p', {
        text: 'Are you sure you want to delete all tag mappings? This action cannot be undone.'
      });

      new Setting(contentEl)
        .addButton(button => button
          .setButtonText('Cancel')
          .onClick(() => {
            modal.close();
            resolve(false);
          }))
        .addButton(button => button
          .setButtonText('Delete All')
          .setWarning()
          .onClick(() => {
            modal.close();
            resolve(true);
          }));

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

  private async showDeleteConfirmation(mapping: TagMapping): Promise<boolean> {
    return new Promise((resolve) => {
      const modal = new Modal(this.app);
      modal.titleEl.setText('Delete Tag Mapping');

      const contentEl = modal.contentEl;
      const tagDisplay = mapping.tags.map(t => '#' + t).join(' + ');

      contentEl.createEl('p', {
        text: `Are you sure you want to delete the mapping for ${tagDisplay}?\n` +
          `Files with these tags will no longer be moved automatically.`
      });

      new Setting(contentEl)
        .addButton(button => button
          .setButtonText('Cancel')
          .onClick(() => {
            modal.close();
            resolve(false);
          }))
        .addButton(button => button
          .setButtonText('Delete')
          .setWarning()
          .onClick(() => {
            modal.close();
            resolve(true);
          }));

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
