import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ForecastService {
  temp;
  weatherMain;
  weatherDesc;
  humidity;
  feels_like;
  pressure;
  timezone;

  // Paris, Ontario is latitude 43.19 and longitude -80.3845
  getParisForecast() {
    return this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat=43.19&lon=-80.3845&units=metric&appid=2af2466f2a62dd5a13d232eeb009e28d').toPromise().then(res => {
      this.temp = JSON.stringify(res["current"]["temp"])
      this.weatherMain = JSON.stringify(res["current"]["weather"][0]["main"])
      this.weatherDesc = JSON.stringify(res["current"]["weather"][0]["description"])
      this.humidity = JSON.stringify(res["current"]["humidity"])
      this.feels_like = JSON.stringify(res["current"]["feels_like"])
      this.pressure = JSON.stringify(res["current"]["pressure"])
      this.timezone = JSON.stringify(res["timezone"])
          //console.log("RECV JSON:\n" + this.forecasts)
    });
  }

  getForecast(lat, lon) {
    return this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=metric&appid=2af2466f2a62dd5a13d232eeb009e28d');
  }

  constructor(
    private http: HttpClient
  ) {}

}