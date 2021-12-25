import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DoctorService} from "../../../services/doctor.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-doctor-details-page',
  templateUrl: './doctor-details-page.component.html',
  styleUrls: ['./doctor-details-page.component.scss']
})
export class DoctorDetailsPageComponent implements OnInit, OnDestroy {

  public STATES = VIEW_STATE;

  // How many viewModels you need depends on the complexity of the views
  public doctorViewModel = new ViewModel(VIEW_STATE.LOADING, null);
  public tasksViewModel = new ViewModel(VIEW_STATE.LOADING, null);

  private subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute,
              private doctorService: DoctorService) {
  }

  ngOnInit(): void {
    this.subscription.add(this.activatedRoute.params.subscribe((params) => {
      this.loadDoctor(params['id']);
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadDoctor(id: string) {
    this.doctorService.getDoctor(id).subscribe((doctor) => {
      this.doctorViewModel = new ViewModel(VIEW_STATE.SUCCESS, doctor);
    }, (error: any) => {
      //  In more complex apps you can transform errors to a more typed interface for easier handling (ie. NotFoundError that extends a ServerError)
      this.doctorViewModel = new ViewModel(VIEW_STATE.ERROR, error);
    });

    //  Depends on the wanted UX. Could also be "zipWith" with the above call, or be called after the above one resolves.
    this.doctorService.getDoctorTasks(id).subscribe((tasks) => this.tasksViewModel = new ViewModel(VIEW_STATE.SUCCESS, tasks));
  }
}

// View states should be per "view", and can be easily extendable (EMPTY, INITIAL, PARTIAL_SUCCESS... etc.)
enum VIEW_STATE {
  LOADING,
  SUCCESS,
  ERROR,
}

//  This could be extracted to a more generic ViewModel with generic types for data|errors
class ViewModel {
  constructor(public viewState: VIEW_STATE, public data: any) {
  }
}
