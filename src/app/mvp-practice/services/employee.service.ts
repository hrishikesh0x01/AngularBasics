import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Department } from 'src/app/shared/models/department.model';
import { Employee } from 'src/app/shared/models/employee.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmployeeService {
  apiLink: string;
  employeeToEdit: BehaviorSubject<Employee> = new BehaviorSubject<Employee>(new Employee(0, '', '', '', '', '', '', 0));

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getDeptData(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/department`);
  }

  getEmpList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiLink}/employees`);
  }

  getEmpDetail(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiLink}/employees/${id}`);
  }

  sendEmployeeToEdit(employee: Employee): void {
    this.employeeToEdit.next(employee);
  }

  getEmployeeToEdit(): BehaviorSubject<Employee> {
    console.log('sent');
    return this.employeeToEdit;
  }

  private editEmp(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiLink}/employees/${employee.id}`, employee);
  }

  private addEmp(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiLink}/employees`, employee);
  }

  saveEmp(employee: Employee): Observable<Employee> {
    console.log(employee);
    return employee.id ? this.editEmp(employee) : this.addEmp(employee);
  }

  deleteEmp(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/employees/${id}`);
  }
}
