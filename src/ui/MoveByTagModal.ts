import { App, Modal } from 'obsidian';
import { MoveByTagSettings } from '../models/types';
import { FileUtils } from '../utils/FileUtils';
import { TagMappingService } from '../services/TagMappingService';
import { FileMovementService } from '../services/FileMovementService';

export class MoveByTagModal extends Modal {
  private settings: MoveByTagSettings;
  private fileUtils: FileUtils;
  private tagMappingService: TagMappingService;
  private fileMovementService: FileMovementService;
  private logger: (message: string) => void;

  constructor(app: App, settings: MoveByTagSettings, logger: (message: string) => void) {
    super(app);
    this.settings = settings;
    this.fileUtils = new FileUtils(app);
    this.tagMappingService = new TagMappingService();
    this.fileMovementService = new FileMovementService(
      app,
      settings,
      this.fileUtils,
      this.tagMappingService,
      logger
    );
    this.logger = logger;
  }

  async moveFilesByTag(): Promise<void> {
    const files = this.app.vault.getMarkdownFiles().filter(file => {
      return this.fileUtils.isInLimitedFolder(file.path, this.settings.limitedFolders);
    });
    
    this.logger(`Found ${files.length} markdown files total`);
    
    const result = await this.fileMovementService.moveFiles(files);
    
    if (result.total === 0) {
      this.close();
    }
  }
}
