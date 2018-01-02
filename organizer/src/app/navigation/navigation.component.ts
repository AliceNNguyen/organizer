import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToCalender(){
    event.stopPropagation();
    let calendar = document.getElementById("calendar");
    calendar.scrollIntoView();
  }

  scrollToToDo(){
    event.stopPropagation();
    let toDo = document.getElementById("to-do");
    toDo.scrollIntoView();
  }

  scrollToMails(){
    event.stopPropagation();
    
  }
}
