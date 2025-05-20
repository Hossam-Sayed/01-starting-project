import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  // With ! comes { required: true }
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);

  // Using DI, we can allow a task to remove itself
  onComplete() {
    this.tasksService.removeTask(this.task.id);
  }
}
