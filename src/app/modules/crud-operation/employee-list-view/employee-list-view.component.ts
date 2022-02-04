import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-employee-list-view',
  templateUrl: './employee-list-view.component.html',
  styleUrls: ['./employee-list-view.component.css']
})
export class EmployeeListViewComponent implements OnInit {

  employeeData: Employee[];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.crudService.getEmpData().subscribe(data => {
      this.employeeData = data;
    }, errors => {
      alert("Something went wrong!! - emp");
    })
  }

}
