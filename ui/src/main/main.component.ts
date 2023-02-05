import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  ViewContainerRef,
  ViewChild,
  ComponentRef,
} from '@angular/core';

import { EditorView } from '@codemirror/view';
import { cpp } from '@codemirror/lang-cpp';
import { basicSetup } from 'codemirror';
import { materialDark } from '@ddietr/codemirror-themes/material-dark';
import { FileTabComponent } from './components/file-tab/file-tab.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit, AfterViewInit {
  editFileName: boolean = false;
  splitterLayout: string = 'horizontal';
  codeEditor: EditorView | null = null;
  fileName: string = 'Main.cpp';
  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  viewContainerRef?: ViewContainerRef;
  // codeMirrorOptions: any = {
  //   theme: 'material',
  //   lineNumbers: true,
  //   lineWrapping: false,
  //   foldGutter: true,
  //   gutters: [
  //     'CodeMirror-linenumbers',
  //     'CodeMirror-foldgutter',
  //     'CodeMirror-lint-markers',
  //   ],
  //   autoCloseBrackets: true,
  //   matchBrackets: true,
  //   lint: true,
  //   indentUnit: 4,
  //   smartIndent: true,
  //   //inputStyle: 'contenteditable',
  //   dragDrop: true,
  //   spellcheck: false,
  //   autocorrect: false,
  //   autocapitalize: false,
  // };

  constructor(private _elementRef: ElementRef) {}

  ngOnInit(): void {
    this._elementRef.nativeElement.removeAttribute('ng-version');
  }

  ngAfterViewInit(): void {
    // this.addFileTabs();

    console.log(this._elementRef.nativeElement);
    const element: HTMLElement | null = document.getElementById('code-block');
    console.log(element);
    this.codeEditor = new EditorView({
      extensions: [cpp(), basicSetup, materialDark],
    });
    element?.append(this.codeEditor.dom);
  }

  addFileTabs() {
    let componentRef: ComponentRef<FileTabComponent> | undefined =
      this.viewContainerRef?.createComponent<FileTabComponent>(
        FileTabComponent
      );
    componentRef?.instance.addComponetRef(componentRef);
    // componentRef?.instance.fileTabComponentRef = componentRef;
    // componentRef?.instance.fileTabComponentRef = componentRef as any;
  }
}
