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
  }

  addToDo(newToDo:string){
    if(newToDo){
      this.toDos.push({text:newToDo, done:false});
    }
    console.log(this.toDos);
  }

  onCheck(event){
    console.log(event);
  }

  deleteCompleted(){
    this.toDos.forEach((item, index) => {
      if(item.done){
        this.toDos.splice(index, 1);
      }
    });
    console.log(this.toDos);
    let completed = <HTMLElement>document.getElementsByClassName("done-true");
    while(completed[0]) {
      completed[0].parentNode.removeChild(completed[0]);
    }​

  /*  let completed = <HTMLElement>document.getElementsByClassName("mat-checkbox-checked");
    console.log(completed);

    for (let listElementCompleted of completed){
      console.log(listElementCompleted.parentElement);
      //listElementCompleted.parentElement.remove();
    }*/
  }

}
