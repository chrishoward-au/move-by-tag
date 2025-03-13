import { App, Modal, TFile } from 'obsidian';
import { FileMovementService } from '../services/FileMovementService';
import { MoveScope, MoveByTagSettings } from '../models/types';
import { FileUtils } from '../utils/FileUtils';
import { TagMappingService } from '../services/TagMappingService';
import { TagMappingModal } from './TagMappingModal';

export class MoveOptionsModal extends Modal {
  private settings: MoveByTagSettings;
  private logger: (message: string) => void;
  private fileMovementService: FileMovementService;
  private activeFile: TFile | null;
  private plugin: any; // Reference to the plugin for saving settings

  constructor(
    app: App, 
    settings: MoveByTagSettings, 
    logger: (message: string) => void,
    plugin: any
  ) {
    super(app);
    this.settings = settings;
    this.logger = logger;
    this.plugin = plugin;
    this.activeFile = this.app.workspace.getActiveFile();
    
    // Initialize services
    const fileUtils = new FileUtils(this.app);
    const tagMappingService = new TagMappingService();
    this.fileMovementService = new FileMovementService(
      this.app,
      this.settings,
      fileUtils,
      tagMappingService,
      this.logger
    );
  }

  onOpen() {
    const { contentEl } = this;
    
    // Set a title for the modal
    this.titleEl.setText('Move by Tag Options');
    
    // Create a container with some styling
    const container = contentEl.createDiv({ cls: 'move-options-container' });
    container.style.padding = '20px';
    container.style.maxWidth = '500px';
    
    // Add description
    const description = container.createEl('p', { 
      text: 'Choose how you want to move files based on tags:',
      cls: 'move-options-description'
    });
    description.style.marginBottom = '20px';
    description.style.color = 'var(--text-normal)';
    
    // Create button container
    const buttonContainer = container.createDiv({ cls: 'move-options-buttons' });
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'column';
    buttonContainer.style.gap = '10px';
    
    // Add buttons for each option
    this.createOptionButton(
      buttonContainer,
      'Move Current File',
      'Move only the currently active file based on its tags',
      async () => {
        if (this.activeFile) {
          this.close();
          await this.fileMovementService.moveFile(this.activeFile);
        }
      },
      !this.activeFile // Disabled if no active file
    );
    
    this.createOptionButton(
      buttonContainer,
      'Move Files in Current Folder',
      'Move all files in the same folder as the active file',
      async () => {
        if (this.activeFile) {
          this.close();
          await this.fileMovementService.moveFiles(MoveScope.CURRENT_FOLDER, this.activeFile);
        }
      },
      !this.activeFile // Disabled if no active file
    );
    
    this.createOptionButton(
      buttonContainer,
      'Move Files in All Folders',
      'Move files across the vault based, respecting Excluded and Specific folder settings',
      async () => {
        this.close();
        await this.fileMovementService.moveFiles(MoveScope.ALL_FOLDERS);
      }
    );
    
    // Add a separator
    const separator = container.createEl('hr');
    separator.style.margin = '20px 0';
    separator.style.border = 'none';
    separator.style.borderTop = '1px solid var(--background-modifier-border)';
    
    // Add a section title for tag management
    const tagManagementTitle = container.createEl('h4', {
      text: 'Tag Rule Management'
    });
    tagManagementTitle.style.marginBottom = '10px';
    
    // Create a button container for tag management
    const tagManagementContainer = container.createDiv({ cls: 'tag-management-buttons' });
    tagManagementContainer.style.display = 'flex';
    tagManagementContainer.style.flexDirection = 'column';
    tagManagementContainer.style.gap = '10px';
    
    // Add button to create a new tag rule
    this.createOptionButton(
      tagManagementContainer,
      'Create Tag Rule from Current File',
      'Create a new tag mapping rule based on the tags in the current file',
      () => {
        if (this.activeFile) {
          this.close();
          this.createRuleFromFile(this.activeFile);
        }
      },
      !this.activeFile // Disabled if no active file
    );
    
    // Add cancel button
    const cancelButtonContainer = container.createDiv();
    cancelButtonContainer.style.marginTop = '20px';
    cancelButtonContainer.style.display = 'flex';
    cancelButtonContainer.style.justifyContent = 'flex-end';
    
    const cancelButton = cancelButtonContainer.createEl('button', {
      text: 'Cancel',
      cls: 'mod-warning'
    });
    
    cancelButton.addEventListener('click', () => {
      this.close();
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

  /**
   * Create an option button with description
   */
  private createOptionButton(
    container: HTMLElement, 
    label: string, 
    description: string, 
    onClick: () => void,
    disabled: boolean = false
  ) {
    const buttonWrapper = container.createDiv({ cls: 'move-option-button-wrapper' });
    buttonWrapper.style.display = 'flex';
    buttonWrapper.style.flexDirection = 'column';
    buttonWrapper.style.border = '1px solid var(--background-modifier-border)';
    buttonWrapper.style.borderRadius = '4px';
    buttonWrapper.style.padding = '10px';
    
    if (!disabled) {
      buttonWrapper.style.cursor = 'pointer';
      buttonWrapper.style.transition = 'background-color 0.2s ease';
      buttonWrapper.addEventListener('mouseover', () => {
        buttonWrapper.style.backgroundColor = 'var(--background-secondary-alt)';
      });
      buttonWrapper.addEventListener('mouseout', () => {
        buttonWrapper.style.backgroundColor = '';
      });
      buttonWrapper.addEventListener('click', onClick);
    } else {
      buttonWrapper.style.opacity = '0.5';
      buttonWrapper.style.cursor = 'not-allowed';
      buttonWrapper.title ='Requires an open file';
    }
    
    const labelEl = buttonWrapper.createEl('div', { 
      text: label,
      cls: 'move-option-label'
    });
    labelEl.style.fontWeight = 'bold';
    labelEl.style.marginBottom = '5px';
    
    const descriptionEl = buttonWrapper.createEl('div', { 
      text: description,
      cls: 'move-option-description'
    });
    descriptionEl.style.fontSize = '0.85em';
    descriptionEl.style.color = 'var(--text-muted)';
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
} 