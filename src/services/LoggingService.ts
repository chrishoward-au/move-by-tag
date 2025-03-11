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
    return `${operationType}_${timestamp}.csv`;
  }
  
  /**
   * Create a log entry for a file movement
   */
  public createLogEntry(
    file: TFile,
    destinationPath: string | null,
    tags: string[],
    hadRuleConflict: boolean,
    wasSkipped: boolean
  ): LogEntry {
    return {
      timestamp: this.getTimestamp(),
      fileName: file.name,
      sourcePath: file.path,
      destinationPath: destinationPath || '',
      tags,
      hadRuleConflict,
      wasSkipped
    };
  }
  
  /**
   * Save log entries to a CSV file
   */
  public async saveLogEntries(
    operationType: MoveOperationType,
    entries: LogEntry[]
  ): Promise<string> {
    await this.ensureLogDirectory();
    
    const filename = this.getLogFilename(operationType);
    const fullPath = `${this.logFolderPath}/${filename}`;
    
    // Create CSV header
    let csvContent = 'Timestamp,File Name,Source Path,Destination Path,Tags,Had Rule Conflict,Was Skipped\n';
    
    // Add entries
    for (const entry of entries) {
      csvContent += [
        entry.timestamp,
        this.escapeCsvField(entry.fileName),
        this.escapeCsvField(entry.sourcePath),
        this.escapeCsvField(entry.destinationPath),
        this.escapeCsvField(entry.tags.join(', ')),
        entry.hadRuleConflict ? 'Yes' : 'No',
        entry.wasSkipped ? 'Yes' : 'No'
      ].join(',') + '\n';
    }
    
    // Write to file
    await this.app.vault.adapter.write(fullPath, csvContent);
    
    return fullPath;
  }
  
  /**
   * Escape a field for CSV output
   */
  private escapeCsvField(field: string): string {
    // If the field contains commas, quotes, or newlines, wrap it in quotes
    if (/[",\n\r]/.test(field)) {
      // Double up any quotes
      return `"${field.replace(/"/g, '""')}"`;
    }
    return field;
  }
} 