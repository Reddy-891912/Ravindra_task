import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-stage2',
  templateUrl: './stage2.component.html',
  styleUrls: ['./stage2.component.css']
})
export class Stage2Component {
  public tasks:any = [];

  constructor(public _tasksServie:TasksService){
    _tasksServie.getTasks().subscribe(
      (data:any)=>{
        this.tasks = data.filter((task:any)=>task.stage==2);
      }
    )
  }

}
