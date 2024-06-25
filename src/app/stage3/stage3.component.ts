import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-stage3',
  templateUrl: './stage3.component.html',
  styleUrls: ['./stage3.component.css']
})
export class Stage3Component {
  public tasks:any = [];

  constructor(public _tasksServie:TasksService){
    _tasksServie.getTasks().subscribe(
      (data:any)=>{
        this.tasks = data.filter((task:any)=>task.stage==3);
      }
    )
  }

}
