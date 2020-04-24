import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service'

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  temp;
  weatherMain;
  weatherDesc;
  humidity;
  feels_like;
  pressure;
  timezone;

  constructor(
     private forecastService: ForecastService
  ) { }

  ngOnInit() {
    this.forecastService.getParisForecast().then(() => {
      this.temp = this.forecastService.temp
      this.weatherMain = this.forecastService.weatherMain
      this.weatherDesc = this.forecastService.weatherDesc
      this.humidity = this.forecastService.humidity
      this.feels_like = this.forecastService.feels_like
      this.pressure = this.forecastService.pressure
      this.timezone = this.forecastService.timezone
    })
  }

}