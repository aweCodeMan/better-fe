import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Doctor} from "../../../../interfaces";

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorCardComponent {

  @Input() doctor: Doctor | null = null;

}
