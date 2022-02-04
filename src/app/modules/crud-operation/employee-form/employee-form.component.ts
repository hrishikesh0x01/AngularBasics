import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  empForm: FormGroup;
  departmentOptions: Department[];
  subscriptions: Observable<Employee>[];

  constructor(private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute, private crudService: CrudService) {}

  ngOnInit(): void {
    this.empForm = this.generateForm();
    this.getDepartmentData();
    if (this.activeRoute.snapshot.params['id']) {
      this.crudService.getEmployeeToEdit().subscribe((data) => {
        this.empForm.patchValue(data);
      }, errors => {
        console.log("Something went wrong!! -- edit" + errors);
      });
    }
  }

  getDepartmentData(): void {
    this.crudService.getDeptData().subscribe((data) => {
      this.departmentOptions = data;
    }, errors => {
      alert("Something went wrong!!" + errors);
    });
  }

  generateForm(): FormGroup {
    return this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      emailId: ['', Validators.email],
      mobile: ['', Validators.required],
      gender: [''],
      empdate: [''],
      dept: [0]
    });
  }

  onSubmit(id?: number) {
    console.log(this.empForm);
    if (this.empForm.status === 'VALID') {
      let emp: Employee;
      console.log(id);
      if (id) {
        emp = {...this.empForm.value, id:id};
      } else {
        emp = this.empForm.value;
      }
      console.log(emp);
      this.crudService.saveEmp(emp).subscribe(data => {
        console.log("Like Share Subscribe...\nKeep supporting...");
      });
      this.router.navigate(['/crud-operation/emplist']);
    }
  }

  onReset() {
    this.empForm.reset();
  }
}
