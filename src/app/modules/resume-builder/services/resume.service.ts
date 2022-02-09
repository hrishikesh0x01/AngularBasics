import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResumeInfo } from '../models/resume-info.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getResumeDetails(id: number): Observable<ResumeInfo> {
    return this.http.get<ResumeInfo>(`${this.apiLink}/resumes/${id}`);
  }

  saveResumeDetails(resume: ResumeInfo): Observable<ResumeInfo> {
    return this.http.post<ResumeInfo>(`${this.apiLink}/resumes`, resume);
  }

  deleteResumeDetails(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/resumes/${id}`);
  }
}
