import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CurrentTimeComponent } from './current-time/current-time.component';

@NgModule({
  imports:  [ 
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CurrentTimeComponent },
    ]), ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    CurrentTimeComponent 
  ],
  bootstrap:   [ AppComponent ]
})
export class AppModule { }
