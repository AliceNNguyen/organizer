import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class DataService {
  name = '';

  constructor(public http: Http) {
    //this.name = "münchen";
    console.log("data service connected...");
  }

  getWeatherData(city){
    console.log(city);
    if (city == null){
      this.name = "münchen";
      console.log("not defined");
    }else{
      this.name = city;
    }
    console.log(this.name);
    return this.http.get("http://api.openweathermap.org/data/2.5/find?q=" + this.name + "&units=metric&mode=json&APPID=f50b66adc9c8721b2014c62decb8356b"
 ).map(res => res.json());
  }


}
