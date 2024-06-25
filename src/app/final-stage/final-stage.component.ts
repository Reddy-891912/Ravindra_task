import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-final-stage',
  templateUrl: './final-stage.component.html',
  styleUrls: ['./final-stage.component.css']
})
export class FinalStageComponent {
  public tasks:any = [];

  constructor(public _tasksServie:TasksService){
    _tasksServie.getTasks().subscribe(
      (data:any)=>{
        this.tasks = data.filter((task:any)=>task.stage==4);
      }
    )
  }
}
