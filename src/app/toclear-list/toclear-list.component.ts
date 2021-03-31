import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-toclear-list',
  templateUrl: './toclear-list.component.html',
  styleUrls: ['./toclear-list.component.css']
})
export class ToclearListComponent {

  task:Task[] = [ ];

  taskName!: string;
  taskDescription!: string;

  addtask(){
    let tempTask: Task = {
      id : 'xxxxx',
      name: this.taskName,
      description: this.taskDescription,
    }
    this.task.push(tempTask);
  }

  deletedtask(TaskComponent:TaskComponent){
    this.task=this.task.filter(t => t !== TaskComponent.taskObj);
  }
}
