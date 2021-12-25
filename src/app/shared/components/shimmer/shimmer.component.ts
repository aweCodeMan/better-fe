import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-shimmer',
  templateUrl: './shimmer.component.html',
  styleUrls: ['./shimmer.component.scss'],
})
export class ShimmerComponent {

  @Input("height") height: string = '1rem';
  @Input("width") width: string = '100%';

}
