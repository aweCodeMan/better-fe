import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Address, Company} from "../../../../interfaces";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent {

  @Input('company') company: Company | null = null;
  @Input('address') address: Address | null = null;

}
