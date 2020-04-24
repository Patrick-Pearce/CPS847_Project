import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { ForecastService } from './forecast.service';
import { ForecastComponent } from './forecast/forecast.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';

@NgModule({
  imports:  [ 
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ForecastComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'our-services', component: OurServicesComponent },
      { path: 'our-customers', component: OurCustomersComponent },
    ]), ],
  declarations: [ 
    AppComponent, 
    CurrentTimeComponent, 
    ForecastComponent, 
    OurCustomersComponent, 
    AboutUsComponent, 
    OurServicesComponent 
  ],
  bootstrap:   [ AppComponent ],
  providers: [ForecastService]
})
export class AppModule { }
