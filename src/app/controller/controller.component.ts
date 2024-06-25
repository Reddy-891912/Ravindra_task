import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  public stage:number = 0;

  public task:string = "";

  constructor(private _taskService:TasksService){

  }

  add(){
    this._taskService.setTask(
      {
        task:this.task,
        stage:this.stage
      }
    )
  }

}
