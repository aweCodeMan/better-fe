import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DoctorDetailsPageComponent} from "./pages/doctor-details-page/doctor-details-page.component";

const routes: Routes = [
  {
    path: ':id',
    component: DoctorDetailsPageComponent,
  }, {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule {
}
