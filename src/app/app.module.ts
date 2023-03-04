import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

import {
  DxButtonModule,
  DxSelectBoxModule,
  DxDataGridModule,
} from 'devextreme-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DxButtonModule, DxDataGridModule, DxSelectBoxModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
