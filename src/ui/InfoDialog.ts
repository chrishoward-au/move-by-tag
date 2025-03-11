import { App, Modal } from 'obsidian';

export class InfoDialog extends Modal {
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
