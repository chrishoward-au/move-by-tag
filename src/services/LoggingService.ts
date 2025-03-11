import { App, TFile } from 'obsidian';
import { TagMappingMatch } from '../models/types';

/**
 * Types of move operations for logging
 */
export enum MoveOperationType {
  SINGLE_FILE = 'SFL', // Single file move
  CURRENT_FOLDER = 'CFD', // Current folder move
  ALL_FOLDERS = 'AFL', // All folders move
}

/**
 * Status indicators for log entries
 */
export enum StatusIndicator {
  SUCCESS = '🟢', // Green light - successful move
  WARNING = '🟠', // Orange light - skipped but not an error (already in place, no tags, no matching rules)
  ERROR = '🔴'    // Red light - error or user intervention (file exists, rule conflict, cancelled, error)
}

/**
 * Reasons why a file might be skipped
 */
export enum SkipReason {
  NONE = '',
  NO_TAGS = 'No tags',
  NO_MATCHING_RULES = 'No matching rules',
  RULE_CONFLICT = 'Rule conflict',
  FILE_EXISTS = 'File exists at destination',
  ALREADY_IN_PLACE = 'Already in correct folder',
  OPERATION_CANCELLED = 'Operation cancelled',
  ERROR = 'Error during move'
}

/**
 * Structure for a log entry
 */
export interface LogEntry {
  timestamp: string;
  fileName: string;
  sourcePath: string;
  destinationPath: string;
  tags: string[];
  hadRuleConflict: boolean;
  wasSkipped: boolean;
  skipReason: SkipReason;
}

/**
 * Service for logging file movement operations
 */
export class LoggingService {
  private app: App;
  private logFolderPath: string = 'Resources/Logs/MoveByTag';
  
  constructor(app: App) {
    this.app = app;
  }
  
  /**
   * Ensure the log directory exists
   */
  private async ensureLogDirectory(): Promise<void> {
    const adapter = this.app.vault.adapter;
    
    // Check if Resources exists
    if (!(await adapter.exists('Resources'))) {
      await adapter.mkdir('Resources');
    }
    
    // Check if Resources/Logs exists
    if (!(await adapter.exists('Resources/Logs'))) {
      await adapter.mkdir('Resources/Logs');
    }
    
    // Check if Resources/Logs/MoveByTag exists
    if (!(await adapter.exists(this.logFolderPath))) {
      await adapter.mkdir(this.logFolderPath);
    }
  }
  
  /**
   * Generate a timestamp in YYYYMMDD HH:MM:SS format
   */
  private getTimestamp(): string {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${year}${month}${day} ${hours}:${minutes}:${seconds}`;
  }
  
  /**
   * Generate a log filename based on operation type and current date/time
   */
  private getLogFilename(operationType: MoveOperationType): string {
    const timestamp = this.getTimestamp().replace(':', '').replace(':', '');
    return `${operationType}_${timestamp}.md`;
  }
  
  /**
   * Create a log entry for a file movement
   */
  public createLogEntry(
    file: TFile,
    destinationPath: string | null,
    tags: string[],
    hadRuleConflict: boolean,
    wasSkipped: boolean,
    skipReason: SkipReason = SkipReason.NONE
  ): LogEntry {
    // Get directory path without filename
    const getDirectoryPath = (path: string): string => {
      const lastSlashIndex = path.lastIndexOf('/');
      const dirPath = lastSlashIndex >= 0 ? path.substring(0, lastSlashIndex) : '';
      // Ensure path starts with a slash if it's not empty
      return dirPath && !dirPath.startsWith('/') ? `/${dirPath}` : dirPath;
    };
    
    // Get source directory (without filename)
    const sourceDir = getDirectoryPath(file.path);
    
    // Get destination directory (without filename)
    let destDir = '';
    if (destinationPath) {
      destDir = getDirectoryPath(destinationPath);
    }
    
    return {
      timestamp: this.getTimestamp(),
      fileName: file.name,
      sourcePath: sourceDir,
      destinationPath: destDir,
      tags,
      hadRuleConflict,
      wasSkipped,
      skipReason
    };
  }
  
  /**
   * Get the appropriate status indicator for a log entry
   */
  private getStatusIndicator(entry: LogEntry): StatusIndicator {
    if (!entry.wasSkipped) {
      return StatusIndicator.SUCCESS; // Green for successful moves
    }
    
    // Determine which skipped files get orange vs. red
    switch (entry.skipReason) {
      case SkipReason.ALREADY_IN_PLACE:
      case SkipReason.NO_TAGS:
      case SkipReason.NO_MATCHING_RULES:
        return StatusIndicator.WARNING; // Orange for non-error skips
        
      case SkipReason.RULE_CONFLICT:
      case SkipReason.FILE_EXISTS:
      case SkipReason.OPERATION_CANCELLED:
      case SkipReason.ERROR:
      default:
        return StatusIndicator.ERROR; // Red for errors and user interventions
    }
  }
  
  /**
   * Format tags for Obsidian compatibility
   */
  private formatTags(tags: string[]): string {
    // Add # prefix to each tag and join with spaces
    return tags.map(tag => `#${tag}`).join(' ');
  }
  
  /**
   * Save log entries to a Markdown file
   */
  public async saveLogEntries(
    operationType: MoveOperationType,
    entries: LogEntry[]
  ): Promise<string> {
    await this.ensureLogDirectory();
    
    const filename = this.getLogFilename(operationType);
    const fullPath = `${this.logFolderPath}/${filename}`;
    
    // Create Markdown content
    let mdContent = `# File Movement Log - ${this.getOperationTypeLabel(operationType)}\n\n`;
    mdContent += `Generated: ${this.getTimestamp()}\n\n`;
    
    // Create table header
    mdContent += `| File Name | Source Path | Destination Path | Triggering Tags | Status | Notes |\n`;
    mdContent += `| --------- | ----------- | ---------------- | --------------- | ------ | ----- |\n`;
    
    // Add entries
    for (const entry of entries) {
      const status = this.getStatusIndicator(entry);
      const reason = entry.skipReason || (entry.hadRuleConflict ? 'Rule conflict resolved' : '');
      const formattedTags = this.formatTags(entry.tags);
      
      mdContent += `| ${this.escapeMarkdownField(entry.fileName)} | ${this.escapeMarkdownField(entry.sourcePath)} | ${this.escapeMarkdownField(entry.destinationPath)} | ${formattedTags} | ${status} | ${reason} |\n`;
    }
    
    // Add summary
    const movedCount = entries.filter(e => !e.wasSkipped).length;
    const skippedCount = entries.filter(e => e.wasSkipped).length;
    
    mdContent += `\n## Summary\n\n`;
    mdContent += `- Total files processed: ${entries.length}\n`;
    mdContent += `- Files moved: ${movedCount}\n`;
    mdContent += `- Files skipped: ${skippedCount}\n`;
    
    // Write to file
    await this.app.vault.adapter.write(fullPath, mdContent);
    
    return fullPath;
  }
  
  /**
   * Get a human-readable label for the operation type
   */
  private getOperationTypeLabel(operationType: MoveOperationType): string {
    switch (operationType) {
      case MoveOperationType.SINGLE_FILE:
        return 'Single File Move';
      case MoveOperationType.CURRENT_FOLDER:
        return 'Current Folder Move';
      case MoveOperationType.ALL_FOLDERS:
        return 'All Folders Move';
      default:
        return 'File Movement';
    }
  }
  
  /**
   * Escape a field for Markdown table
   */
  private escapeMarkdownField(field: string): string {
    if (!field) return '';
    
    // Escape pipe characters and line breaks for markdown tables
    return field.replace(/\|/g, '\\|').replace(/\n/g, '<br>');
  }
} 