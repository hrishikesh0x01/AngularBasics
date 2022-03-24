import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Department } from 'src/app/shared/models/department.model';
import { Designation } from 'src/app/shared/models/designation.model';
import { Mentor } from 'src/app/shared/models/mentor.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class MentorService {
  apiLink: string;
  mentorToEdit: BehaviorSubject<Mentor> = new BehaviorSubject<Mentor>(new Mentor(0, '', '', '', '', 0, '', 0, 0));

  constructor(private http: HttpClient) {
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
    return this.http.get<Mentor[]>(`${this.apiLink}/mentors`);
  }

  getMentorById(id: number): Observable<Mentor> {
    return this.http.get<Mentor>(`${this.apiLink}/mentors/${id}`);
  }

  public editEmp(mentor: Mentor, id: number): Observable<Mentor> {
    return this.http.put<Mentor>(`${this.apiLink}/mentors/${id}`, mentor);
  }

  public addEmp(mentor: Mentor): Observable<Mentor> {
    return this.http.post<Mentor>(`${this.apiLink}/mentors`, mentor);
  }

  deleteEmp(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/mentors/${id}`);
  }
}
