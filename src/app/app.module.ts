import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { BarchartComponent } from './barchart/barchart.component';
import { BubblechartComponent } from './bubblechart/bubblechart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    BubblechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
