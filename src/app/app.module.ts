import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { ForecastService } from './forecast.service';
import { ForecastComponent } from './forecast/forecast.component';

@NgModule({
  imports:  [ 
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ForecastComponent },
    ]), ],
  declarations: [ 
    AppComponent, 
    CurrentTimeComponent, 
    ForecastComponent 
  ],
  bootstrap:   [ AppComponent ],
  providers: [ForecastService]
})
export class AppModule { }
