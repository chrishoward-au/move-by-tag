import { Plugin, Modal, App, Command } from 'obsidian';

export default class MoveByTagPlugin extends Plugin {
    async onload() {
        console.log('Move by Tag Plugin loaded');
        
        // Register the command in Obsidian
        this.addCommand({
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

    onunload() {
        console.log('Move by Tag Plugin unloaded');
    }

    extractTags(content: string): string[] {
      const tagRegex = /#\w+/g;
      return content.match(tagRegex) || [];
    }

    async showFileInfo(file: any) {
        const content = await this.app.vault.read(file);
        this.showFileInfoDialog(file.path, content);
    }

    showFileInfoDialog(filePath: string, content: string) {
      const fileName = filePath.split('/').pop();
      const tags = this.extractTags(content);
      
      const dialogContent = `File Name: ${fileName}\nLocation: ${filePath}\nTags: ${tags.join(', ')}`;
      
      const dialog = new InfoDialog(this.app, dialogContent);
      dialog.open();
    }
}

class InfoDialog extends Modal {
    private content: string;

    constructor(app: App, content: string) {
        super(app);
        this.content = content;
    }

    onOpen() {
        const { contentEl } = this;
        contentEl.setText(this.content);
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}
