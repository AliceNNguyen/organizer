import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  toDoCounts: number;
  toDos = [];

  constructor() {
      this.toDoCounts =  0;

  }


  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem("toDoList")));
    this.toDos = JSON.parse(localStorage.getItem("toDoList"));
  }

  addToDo(newToDo:string){
    if(newToDo){
      this.toDos.push({text:newToDo, done:false});
    }
    console.log(this.toDos);
    localStorage.setItem("toDoList", JSON.stringify(this.toDos));
  }

  onCheck(){
    console.log(this.toDos);
    setTimeout(() => {
      this.updateLocalStorage();
    }, 1000);


    //localStorage.setItem("toDoList", JSON.stringify(this.toDos));


  //  console.log(JSON.parse(localStorage.getItem("toDoList")));

  }

  updateLocalStorage(){
    localStorage.setItem("toDoList", JSON.stringify(this.toDos));
    console.log(JSON.parse(localStorage.getItem("toDoList")));
  }

  deleteCompleted(){
    this.toDos.forEach((item, index) => {
      if(item.done){
        this.toDos.splice(index, 1);
      }
    });
    let completed = <HTMLCollection>document.getElementsByClassName("done-true");
    while(completed[0]) {
      completed[0].parentNode.removeChild(completed[0]);
    }​
    console.log(this.toDos);
    localStorage.setItem("toDoList", JSON.stringify(this.toDos));


  /*  let completed = <HTMLElement>document.getElementsByClassName("mat-checkbox-checked");
    console.log(completed);

    for (let listElementCompleted of completed){
      console.log(listElementCompleted.parentElement);
      //listElementCompleted.parentElement.remove();
    }*/
  }

}
