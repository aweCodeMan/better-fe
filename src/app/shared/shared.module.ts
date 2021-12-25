import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CompanyComponent} from "./components/company/company.component";
import {AddressComponent} from "./components/address/address.component";
import {ShimmerComponent} from "./components/shimmer/shimmer.component";
import {MissingComponent} from "./components/missing/missing.component";
import {DoctorCardComponent} from "./components/doctor-card/doctor-card.component";

@NgModule({
  declarations: [
    DoctorCardComponent,
    AddressComponent,
    CompanyComponent,
    ShimmerComponent,
    MissingComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

    DoctorCardComponent,
    AddressComponent,
    CompanyComponent,
    ShimmerComponent,
    MissingComponent,
  ]
})
export class SharedModule {
}
