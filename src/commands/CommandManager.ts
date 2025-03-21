import { App, Plugin, TFile } from 'obsidian';
import { MoveByTagSettings, MoveScope } from '../models/types';
import { MoveByTagModal } from '../ui/MoveByTagModal';
import { InfoDialog } from '../ui/InfoDialog';
import { FileUtils } from '../utils/FileUtils';
import { FileMovementService } from '../services/FileMovementService';
import { TagMappingService } from '../services/TagMappingService';
import { MoveOptionsModal } from '../ui/MoveOptionsModal';
import { TagMappingModal } from '../ui/TagMappingModal';

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
    this.registerMoveInCurrentFolderCommand();
    this.registerMoveOptionsCommand();
    this.registerCreateRuleCommand();
  }

  /**
   * Register the Move by Tag command
   */
  private registerMoveByTagCommand(): void {
    this.plugin.addCommand({
      id: 'move-by-tag',
      name: 'Move by Tag (All Folders)',
      callback: async () => {
        const fileMovementService = new FileMovementService(
          this.app,
          this.settings,
          this.fileUtils,
          new TagMappingService(),
          this.logger
        );
        
        await fileMovementService.moveFiles(MoveScope.ALL_FOLDERS);
      },
    });
  }

  /**
   * Register the Move in Current Folder command
   */
  private registerMoveInCurrentFolderCommand(): void {
    this.plugin.addCommand({
      id: 'move-in-current-folder',
      name: 'Move by Tag (Current Folder)',
      checkCallback: (checking: boolean) => {
        // Check if there's an active file to determine the current folder
        const activeFile = this.app.workspace.getActiveFile();
        if (activeFile) {
          if (!checking) {
            this.moveFilesInCurrentFolder(activeFile);
          }
          return true;
        }
        return false;
      }
    });
  }

  /**
   * Move files in the current folder
   */
  private async moveFilesInCurrentFolder(activeFile: TFile): Promise<void> {
    const fileMovementService = new FileMovementService(
      this.app,
      this.settings,
      this.fileUtils,
      new TagMappingService(),
      this.logger
    );
    
    await fileMovementService.moveFiles(MoveScope.CURRENT_FOLDER, activeFile);
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

  /**
   * Register the Move Options command
   */
  private registerMoveOptionsCommand(): void {
    this.plugin.addCommand({
      id: 'move-options',
      name: 'Show Move Options',
      callback: () => {
        new MoveOptionsModal(this.app, this.settings, this.logger, this.plugin).open();
      }
    });
  }

  /**
   * Register the Create Rule command
   */
  private registerCreateRuleCommand(): void {
    this.plugin.addCommand({
      id: 'create-tag-rule',
      name: 'Create Tag Rule from Current File',
      checkCallback: (checking: boolean) => {
        // Check if there's an active file
        const activeFile = this.app.workspace.getActiveFile();
        if (activeFile) {
          if (!checking) {
            this.createRuleFromFile(activeFile);
          }
          return true;
        }
        return false;
      }
    });
  }

  /**
   * Create a tag rule from the current file
   */
  private async createRuleFromFile(file: TFile): Promise<void> {
    const saveSettings = async () => {
      await this.plugin.saveData(this.settings);
    };

    const modal = new TagMappingModal(
      this.app,
      this.settings,
      saveSettings,
      () => {
        this.logger(`Tag rule created for file: ${file.path}`);
      },
      file
    );

    modal.showAddMappingModal();
  }
} 