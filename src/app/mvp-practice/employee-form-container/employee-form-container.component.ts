import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/models/department.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.scss']
})
export class EmployeeFormContainerComponent implements OnInit {

  departmentOptions: Department[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

}
