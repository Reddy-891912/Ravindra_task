import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-initial-stage',
  templateUrl: './initial-stage.component.html',
  styleUrls: ['./initial-stage.component.css']
})
export class InitialStageComponent {
  
  public tasks:any = [];

  constructor(public _tasksServie:TasksService){
    _tasksServie.getTasks().subscribe(
      (data:any)=>{
        this.tasks = data.filter((task:any)=>task.stage==1);
      }
    )
  }

}
