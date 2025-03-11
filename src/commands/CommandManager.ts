import { App, Plugin, TFile } from 'obsidian';
import { MoveByTagSettings } from '../models/types';
import { MoveByTagModal } from '../ui/MoveByTagModal';
import { InfoDialog } from '../ui/InfoDialog';
import { FileUtils } from '../utils/FileUtils';

export class CommandManager {
  private plugin: Plugin;
  private app: App;
  private settings: MoveByTagSettings;
  private fileUtils: FileUtils;
  private logger: (message: string) => void;

  constructor(
    plugin: Plugin, 
    app: App, 
    settings: MoveByTagSettings, 
    fileUtils: FileUtils,
    logger: (message: string) => void
  ) {
    this.plugin = plugin;
    this.app = app;
    this.settings = settings;
    this.fileUtils = fileUtils;
    this.logger = logger;
  }

  /**
   * Register all commands
   */
  public registerCommands(): void {
    this.registerMoveByTagCommand();
    this.registerShowFileInfoCommand();
  }

  /**
   * Register the Move by Tag command
   */
  private registerMoveByTagCommand(): void {
    this.plugin.addCommand({
      id: 'move-by-tag',
      name: 'Move by Tag',
      callback: async () => {
        // Create an instance of MoveByTagModal but don't show it
        const processor = new MoveByTagModal(this.app, this.settings, this.logger);
        
        // Directly call the moveFilesByTag method without showing the modal
        await processor.moveFilesByTag();
      },
    });
  }

  /**
   * Register the Show File Info command
   */
  private registerShowFileInfoCommand(): void {
    this.plugin.addCommand({
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
  }

  /**
   * Show file information
   */
  private async showFileInfo(file: TFile): Promise<void> {
    const content = await this.app.vault.read(file);
    this.showFileInfoDialog(file, content);
  }

  /**
   * Show file information dialog
   */
  private showFileInfoDialog(file: TFile, content: string): void {
    const fileName = file.name;
    const filePath = file.path;
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
    
    new InfoDialog(this.app, infoText, file, this.settings, this.logger).open();
  }
} 