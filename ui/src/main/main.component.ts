import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
} from '@angular/core';

import { EditorView } from '@codemirror/view';
import { cpp } from '@codemirror/lang-cpp';
import { basicSetup } from 'codemirror';
import { materialDark } from '@ddietr/codemirror-themes/material-dark';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit, AfterViewInit {
  splitterLayout: string = 'horizontal';
  codeEditor: EditorView | null = null;
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
    console.log(this._elementRef.nativeElement);
    const element: HTMLElement | null = document.getElementById('code-block');
    console.log(element);
    this.codeEditor = new EditorView({
      extensions: [cpp(), basicSetup, materialDark],
    });
    element?.append(this.codeEditor.dom);
  }
}
