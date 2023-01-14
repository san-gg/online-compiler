import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { SplitterModule } from 'primeng/splitter';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  declarations: [MainComponent],
  imports: [BrowserModule, SplitterModule, CodemirrorModule],
  providers: [],
  bootstrap: [MainComponent],
})
export class MainModule {}
