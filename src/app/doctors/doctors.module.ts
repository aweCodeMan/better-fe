import {NgModule} from '@angular/core';
import {DoctorsRoutingModule} from './doctors-routing.module';
import {DoctorDetailsPageComponent} from './pages/doctor-details-page/doctor-details-page.component';
import {TaskCardComponent} from './components/task-card/task-card.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    DoctorDetailsPageComponent,
    TaskCardComponent,
  ],
  imports: [
    SharedModule,
    DoctorsRoutingModule,
  ]
})
export class DoctorsModule {
}
