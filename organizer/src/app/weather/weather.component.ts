import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getWeatherData("münchen").subscribe((weather) => {
      this.weather = weather.list[0];
      console.log(this.weather);
    });
    this.onEsc();
  }

  toggleWeatherWidget(){
    console.log("click");
    let flipper = document.getElementById("flipper");
    let front = document.getElementsByClassName("front")[0];
    let back = document.getElementsByClassName("back")[0];
    flipper.classList.add("flipped");
    back.style.display= "block";
    front.style.display = "none";

  }

  flipToFront(){
    let flipper = document.getElementById("flipper");
    let front = document.getElementsByClassName("front")[0];
    let back = document.getElementsByClassName("back")[0];
    flipper.classList.remove("flipped");
    back.style.display = "none";
    front.style.display = "block";
  }

  onEnter(value:string){
    console.log(value);
    this.flipToFront();
    this.dataService.getWeatherData(value).subscribe((weather) => {
      this.weather = weather.list[0];
    });
  }

  onEsc(){
    document.onkeydown = function(event){
      if ( event.keyCode === 27){
        let flipper = document.getElementById("flipper");
        let front = document.getElementsByClassName("front")[0];
        let back = document.getElementsByClassName("back")[0];
        flipper.classList.remove("flipped");
        back.style.display = "none";
        front.style.display = "block";
            }
      };
  }

}
