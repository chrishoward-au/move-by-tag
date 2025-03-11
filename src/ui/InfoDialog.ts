import { App, Modal, TFile } from 'obsidian';
import { FileMovementService } from '../services/FileMovementService';
import { FileUtils } from '../utils/FileUtils';
import { MoveByTagSettings } from '../models/types';
import { TagMappingService } from '../services/TagMappingService';

export class InfoDialog extends Modal {
  private content: string;
  private file: TFile | null;
  private fileMovementService: FileMovementService | null = null;

  constructor(app: App, content: string, file?: TFile, settings?: MoveByTagSettings, logger?: (message: string) => void) {
    super(app);
    this.content = content;
    this.file = file || null;
    
    // Initialize FileMovementService if all dependencies are provided
    if (file && settings && logger) {
      const fileUtils = new FileUtils(app);
      const tagMappingService = new TagMappingService();
      this.fileMovementService = new FileMovementService(
        app,
        settings,
        fileUtils,
        tagMappingService,
        logger
      );
    }
  }

  onOpen() {
    const { contentEl } = this;
    
    // Set a title for the modal
    this.titleEl.setText('File Information');
    
    // Create a container with some styling
    const container = contentEl.createDiv({ cls: 'file-info-container' });
    container.style.padding = '10px';
    container.style.maxWidth = '600px';
    
    // Parse the content string to extract sections
    const sections = this.parseContent(this.content);
    
    // Display file header information
    if (sections.header) {
      const headerEl = container.createDiv({ cls: 'file-info-header' });
      headerEl.style.marginBottom = '15px';
      headerEl.style.borderBottom = '1px solid var(--background-modifier-border)';
      headerEl.style.paddingBottom = '10px';
      
      // File name with icon
      if (sections.fileName) {
        const fileNameEl = headerEl.createDiv({ cls: 'file-info-name' });
        fileNameEl.style.fontSize = '1.2em';
        fileNameEl.style.fontWeight = 'bold';
        fileNameEl.style.display = 'flex';
        fileNameEl.style.alignItems = 'center';
        fileNameEl.style.marginBottom = '5px';
        
        // Add document icon
        const iconEl = fileNameEl.createSpan({ cls: 'file-info-icon' });
        iconEl.style.marginRight = '8px';
        iconEl.innerHTML = `<svg viewBox="0 0 100 100" width="20" height="20" class="document"><path fill="currentColor" stroke="currentColor" d="M14,4v92h72V29.2l-0.6-0.6l-24-24L60.8,4L14,4z M18,8h40v24h24v60H18V8z M62,10.9L79.1,28H62V10.9z"></path></svg>`;
        
        fileNameEl.createSpan({ text: sections.fileName });
      }
      
      // File path
      if (sections.filePath) {
        const pathEl = headerEl.createDiv({ cls: 'file-info-path' });
        pathEl.style.fontSize = '0.9em';
        pathEl.style.color = 'var(--text-muted)';
        pathEl.style.marginBottom = '5px';
        pathEl.createSpan({ text: 'Path: ' });
        pathEl.createSpan({ text: sections.filePath });
      }
    }
    
    // Display tags section
    if (sections.tags) {
      const tagsSection = container.createDiv({ cls: 'file-info-tags-section' });
      tagsSection.style.marginBottom = '15px';
      
      const tagsHeader = tagsSection.createEl('h4', { text: 'Tags' });
      tagsHeader.style.marginBottom = '8px';
      tagsHeader.style.marginTop = '0';
      
      const tagsContainer = tagsSection.createDiv({ cls: 'file-info-tags' });
      tagsContainer.style.display = 'flex';
      tagsContainer.style.flexWrap = 'wrap';
      tagsContainer.style.gap = '5px';
      
      if (sections.tagsList && sections.tagsList.length > 0) {
        sections.tagsList.forEach(tag => {
          const tagEl = tagsContainer.createSpan({ cls: 'file-info-tag', text: tag });
          tagEl.style.backgroundColor = 'var(--interactive-accent)';
          tagEl.style.color = 'var(--text-on-accent)';
          tagEl.style.padding = '2px 8px';
          tagEl.style.borderRadius = '4px';
          tagEl.style.fontSize = '0.85em';
        });
      } else {
        tagsContainer.createSpan({ 
          text: 'No tags found', 
          cls: 'file-info-no-tags' 
        }).style.color = 'var(--text-muted)';
      }
    }
    
    // Display matching folders section
    if (sections.matchingFolders) {
      const foldersSection = container.createDiv({ cls: 'file-info-folders-section' });
      
      const foldersHeader = foldersSection.createEl('h4', { text: 'Matching Folders' });
      foldersHeader.style.marginBottom = '8px';
      foldersHeader.style.marginTop = '0';
      
      if (sections.foldersList && sections.foldersList.length > 0) {
        const foldersList = foldersSection.createEl('ul');
        foldersList.style.paddingLeft = '20px';
        foldersList.style.margin = '0';
        
        sections.foldersList.forEach(folder => {
          const folderItem = foldersList.createEl('li');
          folderItem.style.marginBottom = '5px';
          
          // Split the folder entry into path and tags
          const match = folder.match(/^- (.*) \(tags: (.*)\)$/);
          if (match) {
            const folderPath = match[1];
            const folderTags = match[2];
            
            // Create folder icon and path
            const folderPathEl = folderItem.createSpan();
            folderPathEl.style.display = 'flex';
            folderPathEl.style.alignItems = 'center';
            
            // Add folder icon
            const iconEl = folderPathEl.createSpan({ cls: 'folder-info-icon' });
            iconEl.style.marginRight = '5px';
            iconEl.innerHTML = `<svg viewBox="0 0 100 100" width="16" height="16" class="folder"><path fill="currentColor" stroke="currentColor" d="M10,20v60h80V30H50l-10-10H10z M15,25h22.5l7.5,7.5H85v42.5H15V25z"></path></svg>`;
            
            folderPathEl.createSpan({ text: folderPath });
            
            // Create tags display
            const tagsEl = folderItem.createDiv();
            tagsEl.style.fontSize = '0.85em';
            tagsEl.style.color = 'var(--text-muted)';
            tagsEl.style.marginLeft = '21px';
            tagsEl.createSpan({ text: `Tags: ${folderTags}` });
          } else {
            folderItem.setText(folder);
          }
        });
      } else {
        foldersSection.createDiv({ 
          text: 'No matching folders found', 
          cls: 'file-info-no-folders' 
        }).style.color = 'var(--text-muted)';
      }
    }
    
    // Add buttons at the bottom
    const buttonContainer = container.createDiv({ cls: 'file-info-buttons' });
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'flex-end';
    buttonContainer.style.marginTop = '20px';
    
    // Close button
    const closeButton = buttonContainer.createEl('button', {
      text: 'Close',
      cls: 'mod-warning'
    });
    
    // Move button (only if file and FileMovementService are available)
    if (this.file && this.fileMovementService && sections.foldersList && sections.foldersList.length > 0) {
      const moveButton = buttonContainer.createEl('button', {
        text: 'Move File',
        cls: 'mod-cta'
      });
      moveButton.style.marginLeft = '10px';
      
      moveButton.addEventListener('click', async () => {
        this.close();
        await this.fileMovementService?.moveFile(this.file!);
      });
    }
    
    closeButton.addEventListener('click', () => {
      this.close();
    });
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
  
  /**
   * Parse the content string into structured sections
   */
  private parseContent(content: string): {
    header?: boolean;
    fileName?: string;
    filePath?: string;
    tags?: boolean;
    tagsList?: string[];
    matchingFolders?: boolean;
    foldersList?: string[];
  } {
    const result: any = {
      header: false,
      tags: false,
      matchingFolders: false
    };
    
    const lines = content.split('\n');
    let currentSection = '';
    
    for (const line of lines) {
      if (line.startsWith('File: ')) {
        result.header = true;
        result.fileName = line.substring(6);
        currentSection = 'header';
      } else if (line.startsWith('Path: ')) {
        result.header = true;
        result.filePath = line.substring(6);
        currentSection = 'header';
      } else if (line.startsWith('Tags: ')) {
        result.tags = true;
        const tagsText = line.substring(6);
        result.tagsList = tagsText === 'None' ? [] : tagsText.split(', ');
        currentSection = 'tags';
      } else if (line === 'Matching Folders:') {
        result.matchingFolders = true;
        result.foldersList = [];
        currentSection = 'folders';
      } else if (currentSection === 'folders' && line.trim() !== '') {
        if (!result.foldersList) result.foldersList = [];
        result.foldersList.push(line);
      }
    }
    
    return result;
  }
}
