import { Notice, Plugin, TFile } from 'obsidian';
import { DEFAULT_SETTINGS, MoveByTagSettings } from './models/types';
import { MoveByTagModal } from './ui/MoveByTagModal';
import { MoveByTagSettingTab } from './ui/MoveByTagSettingTab';
import { InfoDialog } from './ui/InfoDialog';
import { FileUtils } from './utils/FileUtils';

export default class MoveByTag extends Plugin {
  settings: MoveByTagSettings;
  private fileUtils: FileUtils;

  public log(message: string) {
    if (this.settings.enableLogging) {
      console.log(`[Move by Tag] ${message}`);
    }
  }

  async onload() {
    await this.loadSettings();
    this.fileUtils = new FileUtils(this.app);

    // This adds a command to the app's command palette.
    this.addCommand({
      id: 'move-by-tag',
      name: 'Move by Tag',
      callback: async () => {
        // Create an instance of MoveByTagModal but don't show it
        const processor = new MoveByTagModal(this.app, this.settings, this.log.bind(this));
        
        // Directly call the moveFilesByTag method without showing the modal
        await processor.moveFilesByTag();
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

    this.addSettingTab(new MoveByTagSettingTab(
      this.app, 
      this, 
      this.settings, 
      this.saveSettings.bind(this)
    ));

    console.log('Move by Tag Plugin loaded');
  }

  async onunload() {
    console.log('Move by Tag Plugin unloaded');
  }

  async showFileInfo(file: TFile) {
    const content = await this.app.vault.read(file);
    this.showFileInfoDialog(file.path, content);
  }

  showFileInfoDialog(filePath: string, content: string) {
    const fileName = filePath.split('/').pop();
    const tags = this.fileUtils.extractTags(content);
    
    let infoText = `File: ${fileName}\nPath: ${filePath}\n\nTags: ${tags.map(t => '#' + t).join(', ') || 'None'}\n\n`;
    
    // Add mapping info
    if (tags.length > 0) {
      infoText += 'Matching Folders:\n';
      const matches = this.settings.tagMappings
        .filter(mapping => {
          return mapping.tags.every(tag => 
            tags.some(fileTag => 
              fileTag.toLowerCase() === tag.toLowerCase() ||
              fileTag.toLowerCase() === tag.toLowerCase() + 's' ||
              fileTag.toLowerCase().slice(0, -1) === tag.toLowerCase()
            )
          );
        });
      
      if (matches.length > 0) {
        matches.forEach(mapping => {
          infoText += `- ${mapping.folder} (tags: ${mapping.tags.map(t => '#' + t).join(' + ')})\n`;
        });
      } else {
        infoText += '- No matching folders found\n';
      }
    }
    
    new InfoDialog(this.app, infoText).open();
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    
    // Ensure all mappings have IDs (for backward compatibility)
    this.settings.tagMappings.forEach(mapping => {
      if (!mapping.id) {
        mapping.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
      }
    });
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
