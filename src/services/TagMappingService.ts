import { TagMapping, TagMappingMatch } from '../models/types';

export class TagMappingService {
  /**
   * Generate a unique ID for a tag mapping
   */
  public generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  /**
   * Find matching folders for a set of tags
   */
  public getTargetFolderForTags(fileTags: string[], tagMappings: TagMapping[]): TagMappingMatch[] {
    if (tagMappings.length === 0) {
      return [];
    }

    // Convert file tags to lowercase for case-insensitive matching
    const lowerFileTags = fileTags.map(tag => tag.toLowerCase());
    const matches: TagMappingMatch[] = [];

    // Check each mapping
    for (const mapping of tagMappings) {
      // Convert mapping tags to lowercase
      const lowerMappingTags = mapping.tags.map(tag => tag.toLowerCase());

      // Track which tags from the mapping were found in the file
      const matchedTags: string[] = [];

      // Check each tag in the mapping
      for (const mappingTag of mapping.tags) {
        const lowerMappingTag = mappingTag.toLowerCase();

        // Check if any file tag matches this mapping tag
        const matchingFileTag = lowerFileTags.find(fileTag =>
          fileTag === lowerMappingTag ||
          fileTag === lowerMappingTag + 's' ||
          fileTag.slice(0, -1) === lowerMappingTag
        );

        if (matchingFileTag) {
          matchedTags.push(mappingTag);
        }
      }

      // If all tags in the mapping were found, it's a match
      if (matchedTags.length === mapping.tags.length) {
        matches.push({ mapping, matchedTags });
      }
    }

    return matches;
  }
}
