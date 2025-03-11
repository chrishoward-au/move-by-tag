import { TFile } from 'obsidian';

export interface TagMapping {
  tags: string[];
  folder: string;
  id: string; // Unique identifier for the mapping
}

export interface MoveByTagSettings {
  tagMappings: TagMapping[];
  confirmBeforeMove: boolean;
  excludedFolders: string[];
  limitedFolders: string[];
  enableLogging: boolean;
}

export const DEFAULT_SETTINGS: MoveByTagSettings = {
  tagMappings: [],
  confirmBeforeMove: true,
  excludedFolders: [],
  limitedFolders: [],
  enableLogging: true
};

export interface FileMovement {
  file: TFile;
  targetPath: string;
}

export interface TagMappingMatch {
  mapping: TagMapping;
  matchedTags: string[];
}
