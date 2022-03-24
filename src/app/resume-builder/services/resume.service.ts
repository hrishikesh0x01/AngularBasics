import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResumeInfo } from '../models/resume-info.model';

@Injectable()
export class ResumeService {

  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL; // assigns the baseURL from the environment file.
  }

  // Gets all the resumes from database.
  getResumeList(): Observable<ResumeInfo[]> {
    return this.http.get<ResumeInfo[]>(`${this.apiLink}/resumes`);
  }

  // Gets the details of resume with corresponding id from database.
  getResumeDetails(id: number): Observable<ResumeInfo> {
    return this.http.get<ResumeInfo>(`${this.apiLink}/resumes/${id}`);
  }

  // Posts the data of resume into the database.
  saveResumeDetails(resume: ResumeInfo): Observable<ResumeInfo> {
    return this.http.post<ResumeInfo>(`${this.apiLink}/resumes`, resume);
  }

  // Updates the resume details with the new data.
  updateResumeDetails(id: number, newDetails: ResumeInfo): Observable<ResumeInfo> {
    return this.http.put<ResumeInfo>(`${this.apiLink}/resumes/${id}`, newDetails);
  }

  // Deletes a resume from database with the corresponding id.
  deleteResumeDetails(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/resumes/${id}`);
  }
}
