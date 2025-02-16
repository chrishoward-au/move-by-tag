import { Plugin, Modal, App, Command, Setting, Notice, TFile, PluginSettingTab } from 'obsidian';

interface MoveByTagSettings {
  tagMappings: Record<string, string>;
  confirmBeforeMove: boolean;
  excludedFolders: string[];
  enableLogging: boolean;
}

const DEFAULT_SETTINGS: MoveByTagSettings = {
  tagMappings: {},
  confirmBeforeMove: true,
  excludedFolders: [],
  enableLogging: true
};

export default class MoveByTag extends Plugin {
  settings: MoveByTagSettings;

  async onload() {
    await this.loadSettings();

    // This adds a command to the app's command palette.
    this.addCommand({
      id: 'move-by-tag',
      name: 'Move by Tag',
      callback: async () => {
        const modal = new MoveByTagModal(this.app, this.settings);
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

  onunload() {
    console.log('Move by Tag Plugin unloaded');
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
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

class MoveByTagModal extends Modal {
  private settings: MoveByTagSettings;

  constructor(app: App, settings: MoveByTagSettings) {
    super(app);
    this.settings = settings;
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
      
      modal.open();
    });
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.setText('Move files based on their tags');

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
      const files = this.app.vault.getMarkdownFiles();
      const movements: Array<{ file: TFile; targetPath: string }> = [];

      // First, plan all movements
      for (const file of files) {
        // Skip files in excluded folders
        if (this.settings.excludedFolders.some(folder => file.path.startsWith(folder))) {
          continue;
        }

        const tags = await this.extractTags(file);
        if (tags.length > 0) {
          const targetFolder = this.getTargetFolderForTags(tags);
          if (targetFolder) {
            const targetPath = `${targetFolder}/${file.name}`;
            // Check if file already exists in target
            if (await this.app.vault.adapter.exists(targetPath)) {
              new Notice(`Skipping ${file.name}: File already exists in target location`);
              continue;
            }
            movements.push({ file, targetPath });
          }
        }
      }

      // If no files to move, notify and return
      if (movements.length === 0) {
        new Notice('No files to move');
        return;
      }

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
    } catch (error) {
      new Notice(`Error during file movement: ${error.message}`);
      console.error('Move by Tag error:', error);
    }
  }

  async extractTags(file: TFile): Promise<string[]> {
    const content = await this.app.vault.read(file);
    const tagRegex = /#([\w-]+)/g;
    const tags = [];
    let match;
    while ((match = tagRegex.exec(content)) !== null) {
      tags.push(match[1]);
    }
    return tags;
  }

  getTargetFolderForTags(tags: string[]): string | null {
    for (const tag of tags) {
      if (this.settings.tagMappings[tag]) {
        return this.settings.tagMappings[tag];
      }
    }
    return null;
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
  plugin: MoveByTag;

  constructor(app: App, plugin: MoveByTag) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    // General Settings
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

    // Excluded Folders
    new Setting(containerEl)
      .setName('Excluded Folders')
      .setDesc('Folders to exclude from file movements (one per line)')
      .addTextArea(text => text
        .setValue(this.plugin.settings.excludedFolders.join('\n'))
        .onChange(async (value) => {
          this.plugin.settings.excludedFolders = value.split('\n').filter(f => f.trim());
          await this.plugin.saveSettings();
        }));

    containerEl.createEl('h3', {text: 'Tag Mappings'});

    // Add a setting for each tag-to-folder mapping
    Object.keys(this.plugin.settings.tagMappings).forEach((tag: string) => {
      const folder = this.plugin.settings.tagMappings[tag];
      new Setting(containerEl)
        .setName(`Tag: #${tag}`)
        .setDesc(`Move files with this tag to: ${folder}`)
        .addText(text => text
          .setValue(folder)
          .onChange(async (value) => {
            this.plugin.settings.tagMappings[tag] = value;
            await this.plugin.saveSettings();
          }))
        .addButton(button => button
          .setButtonText('Delete')
          .onClick(async () => {
            delete this.plugin.settings.tagMappings[tag];
            await this.plugin.saveSettings();
            this.display();
          }));
    });

    // Add a button to create a new tag-to-folder mapping
    new Setting(containerEl)
      .setName('Add New Mapping')
      .setDesc('Create a new tag-to-folder mapping')
      .addButton(button => button
        .setButtonText('Add')
        .onClick(async () => {
          const tag = prompt('Enter the tag (without #):');
          if (tag?.trim()) {
            const folder = prompt('Enter the target folder:');
            if (folder?.trim()) {
              this.plugin.settings.tagMappings[tag.trim()] = folder.trim();
              await this.plugin.saveSettings();
              this.display();
            }
          }
        }));
  }
}
