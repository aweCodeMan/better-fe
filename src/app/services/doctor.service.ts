import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {delay, Observable} from "rxjs";
import {Doctor, Task} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient: HttpClient) {
  }

  getDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${environment.apiUrl}/users`).pipe(delay(300));
  }

  getDoctor(doctorId: string) {
    return this.httpClient.get<Doctor>(`${environment.apiUrl}/users/${doctorId}`).pipe(delay(150));
  }

  getDoctorTasks(doctorId: string) {
    return this.httpClient.get<Task[]>(`${environment.apiUrl}/users/${doctorId}/todos`).pipe(delay(150));
  }
}
