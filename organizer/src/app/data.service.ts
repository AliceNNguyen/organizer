import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class DataService {

  constructor(public http: Http) {
    this.name = "munich";
    console.log("data service connected...");
  }

  getWeatherData(){
    return this.http.get("http://api.openweathermap.org/data/2.5/find?q=" + this.name + "&units=metric&mode=json&APPID=f50b66adc9c8721b2014c62decb8356b"
 ).map(res => res.json());
  }

}
