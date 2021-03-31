import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskObj! : Task;

  @Output () deletetaskSignal : EventEmitter<TaskComponent> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.deletetaskSignal.emit(this)
  }


}
