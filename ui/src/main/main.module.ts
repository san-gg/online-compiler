import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { SplitterModule } from 'primeng/splitter';
import { FileTabComponent } from './components/file-tab/file-tab.component';

@NgModule({
  declarations: [MainComponent, FileTabComponent],
  imports: [BrowserModule, SplitterModule],
  providers: [],
  bootstrap: [MainComponent],
})
export class MainModule {}
