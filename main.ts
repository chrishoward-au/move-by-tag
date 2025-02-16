import { Plugin, Modal, App } from 'obsidian';

export default class ExamplePlugin extends Plugin {
    async onload() {
        console.log('Example Plugin loaded');
        const activeFile = this.app.workspace.getActiveFile();
        if (activeFile) {
            const currentFilePath = activeFile.path;
            const fileContent = await this.app.vault.read(activeFile);
            this.showFileInfoDialog(currentFilePath, fileContent);
        }
    }

    onunload() {
        console.log('Example Plugin unloaded');
    }

    extractTags(content: string): string[] {
      const tagRegex = /#\w+/g;
      return content.match(tagRegex) || [];
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
