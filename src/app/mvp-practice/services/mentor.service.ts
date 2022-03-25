import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Department } from 'src/app/shared/models/department.model';
import { Designation } from 'src/app/shared/models/designation.model';
import { Mentor, MentorAdapter } from 'src/app/shared/models/mentor.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class MentorService {
  apiLink: string;
  mentorToEdit: BehaviorSubject<Mentor> = new BehaviorSubject<Mentor>(this.mentorAdapter.adapt({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: 0,
    dept: 0,
    designation: 0,
    id: 0
  }));

  constructor(private http: HttpClient, private mentorAdapter: MentorAdapter) {
    this.apiLink = environment.baseURL;
  }

  private _genderOptions: string[] = [
    "Male",
    "Female"
  ];

  getGenderOptions(): string[] {
    return this._genderOptions;
  }

  getDeptData(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/departments`);
  }

  getDesignationsData(): Observable<Designation[]> {
    return this.http.get<Designation[]>(`${this.apiLink}/designations`);
  }

  getEmpList(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(`${this.apiLink}/mentors`).pipe(
      map(mentors => {
        return mentors.map(mentor => this.mentorAdapter.adapt(mentor));
      })
    );
  }

  getMentorById(id: number): Observable<Mentor> {
    return this.http.get<Mentor>(`${this.apiLink}/mentors/${id}`).pipe(
      map(mentor => {
        return this.mentorAdapter.adapt(mentor);
      })
    );
  }

  public editEmp(mentor: Mentor, id: number): Observable<Mentor> {
    return this.http.put<Mentor>(`${this.apiLink}/mentors/${id}`, mentor).pipe(
      map(mentor => {
        return this.mentorAdapter.adapt(mentor);
      })
    );
  }

  public addEmp(mentor: Mentor): Observable<Mentor> {
    return this.http.post<Mentor>(`${this.apiLink}/mentors`, mentor).pipe(
      map(mentor => {
        return this.mentorAdapter.adapt(mentor);
      })
    );
  }

  deleteEmp(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/mentors/${id}`);
  }
}
