import {NgModule} from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {HomePageComponent} from "./pages/home-page/home-page.component";

@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HomePageComponent,
    NavbarComponent,
    RouterModule,
  ]
})
export class CoreModule {
}
