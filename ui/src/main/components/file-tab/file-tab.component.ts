import { Component, ViewEncapsulation, ComponentRef } from '@angular/core';

@Component({
  selector: 'file-tab',
  templateUrl: './file-tab.component.html',
  styleUrls: ['./file-tab.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FileTabComponent {
  editFileName: boolean = false;
  fileName: string = 'Main.cpp';
  fileTabComponentRef: ComponentRef<FileTabComponent> | undefined;

  changeFileName(event: FocusEvent) {
    this.fileName = (event.target as HTMLInputElement).value;
    this.editFileName = false;
  }

  renameFile(event: MouseEvent) {
    this.editFileName = true;
  }

  closeTab(event: MouseEvent) {
    //(event.target as Element).parentElement?.remove();
    this.fileTabComponentRef?.destroy();
  }

  addComponetRef(componentRef: ComponentRef<FileTabComponent> | undefined) {
    this.fileTabComponentRef = componentRef;
  }
}
