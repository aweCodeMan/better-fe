import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Address} from "../../../../interfaces";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent {

  @Input('address') address: Address | null = null;

}
