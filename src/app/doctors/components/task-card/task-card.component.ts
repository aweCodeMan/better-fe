import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Task} from "../../../../interfaces";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent {

  @Input('task') task: Task | null = null;

}
