import {Component, OnInit} from '@angular/core';
import {DoctorService} from "../../../services/doctor.service";
import {Doctor} from "../../../../interfaces";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  //  This component is intentionally kept simple, as the more "complex" view logic was done in doctorDetailsPage
  public doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((doctors: Doctor[]) => this.doctors = doctors);
  }
}

