import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [MainComponent],
  imports: [BrowserModule, SplitterModule],
  providers: [],
  bootstrap: [MainComponent],
})
export class MainModule {}
