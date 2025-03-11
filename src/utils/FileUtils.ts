import { App, TFile } from 'obsidian';

export class FileUtils {
  constructor(private app: App) {}

  /**
   * Extract tags from file content
   */
  public extractTags(content: string): string[] {
    const tagRegex = /#([\w-]+)/g;
    const tags = [];
    let match;
    while ((match = tagRegex.exec(content)) !== null) {
      tags.push(match[1]);
    }
    return tags;
  }

  /**
   * Extract tags from a file
   */
  public async extractTagsFromFile(file: TFile): Promise<string[]> {
    try {
      const content = await this.app.vault.read(file);
      return this.extractTags(content);
    } catch (error) {
      console.error(`Error extracting tags from ${file.path}:`, error);
      return [];
    }
  }

  /**
   * Check if a file path is in an excluded folder
   */
  public isInExcludedFolder(filePath: string, excludedFolders: string[]): boolean {
    const normalizedFilePath = filePath.startsWith('/') ? filePath : '/' + filePath;
    
    return excludedFolders.some(folder => {
      const normalizedFolder = folder.startsWith('/') ? folder : '/' + folder;
      return normalizedFilePath.startsWith(normalizedFolder);
    });
  }

  /**
   * Check if a file path is in a limited folder
   */
  public isInLimitedFolder(filePath: string, limitedFolders: string[]): boolean {
    if (limitedFolders.length === 0) return true;
    
    const normalizedFilePath = filePath.startsWith('/') ? filePath.substring(1) : filePath;
    
    return limitedFolders.some(folder => {
      const normalizedFolder = folder === '/' ? '/' : folder.replace(/^\//, '');
      return normalizedFilePath.startsWith(normalizedFolder);
    });
  }
}
