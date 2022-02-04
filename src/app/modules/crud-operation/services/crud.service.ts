import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getEmpData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiLink}/employees`);
  }

  getDeptData(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/department`);
  }
}