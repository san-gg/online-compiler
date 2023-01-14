import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  splitterLayout: string = 'horizontal';
  codeMirrorOptions: any = {
    theme: 'material',
    lineNumbers: true,
    lineWrapping: false,
    foldGutter: true,
    gutters: [
      'CodeMirror-linenumbers',
      'CodeMirror-foldgutter',
      'CodeMirror-lint-markers',
    ],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
    indentUnit: 4,
    smartIndent: true,
    //inputStyle: 'contenteditable',
    dragDrop: true,
    spellcheck: false,
    autocorrect: false,
    autocapitalize: false,
  };

  constructor(private _elementRef: ElementRef) {}

  ngOnInit(): void {
    this._elementRef.nativeElement.removeAttribute('ng-version');
  }
}
