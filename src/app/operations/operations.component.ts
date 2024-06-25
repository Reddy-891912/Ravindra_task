import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {
  public tasks:any = [];

  constructor(public _tasksServie:TasksService){
    _tasksServie.getTasks().subscribe(
      (data:any)=>{
        this.tasks = data;
      }
    )
  }
}
