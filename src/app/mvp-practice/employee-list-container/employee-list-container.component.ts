import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from 'src/app/shared/models/department.model';
import { Employee } from 'src/app/shared/models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.scss']
})
export class EmployeeListContainerComponent implements OnInit {

  private _departmentOptions: Department[];
  public set departmentOptions(value: Department[]) {
    if (value) {
      this._departmentOptions = value;
    }
  }
  public get departmentOptions(): Department[] {
    return this._departmentOptions;
  }

  private _employeeData$: Observable<Employee[]>;
  // public set employeeData$(value: Observable<Employee[]>) {
  //   if (value) {
  //     this._employeeData$ = value;
  //   }
  // }
  public get employeeData$(): Observable<Employee[]> {
    return this._employeeData$;
  }

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getDepartmentData();
    this._employeeData$ = this.employeeService.getEmpList();
  }

  private getDepartmentData(): void {
    this.employeeService.getDeptData().subscribe(data => {
      this.departmentOptions = data;
    }, errors => {
      alert(errors);
    });
  }

  public displayForm(id?: number): void {
    if (id) {
      this.router.navigateByUrl(`/mvp-practice/edit/${id}`);
    } else {
      this.router.navigateByUrl('/mvp-practice/add');
    }
  }

  public delete(id: number): void {
    this.employeeService.deleteEmp(id).subscribe(res => {
      console.log("Deleted: ", id);
    });
  }
}
