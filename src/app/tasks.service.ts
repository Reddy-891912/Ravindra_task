import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public id:number = 1;
  public tasks:any = [];

  public taskSub:BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  getTasks(){
    return this.taskSub.asObservable();
  }

  setTask(task:any){
    task.id = ++this.id;
    this.tasks.push(task);
    this.taskSub.next(this.tasks);
  }

  nextStage(selectedTask:any){
    if(selectedTask.stage==4){
      return;
    }
    for(let task of this.tasks){
      if(task.id == selectedTask.id){
        task.stage++;
      }
    }
    this.taskSub.next(this.tasks);
  }

  prevStage(selectedTask:any){
    if(selectedTask.stage==1){
      return;
    }
    for(let task of this.tasks){
      if(task.id == selectedTask.id){
        task.stage--;
      }
    }
    this.taskSub.next(this.tasks);
  }

  deleteTask(selectedTask:any){
    for(let i=0; i<this.tasks.length;i++){
      if(this.tasks[i].id == selectedTask.id){
        this.tasks.splice(i,1);
      }
    }
    this.taskSub.next(this.tasks);
  }

}
