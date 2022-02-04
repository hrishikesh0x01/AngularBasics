import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Input() depts: Observable<Department[]>;

  empForm: FormGroup;
  departmentOptions: Department[];

  constructor(private fb: FormBuilder, private router: Router, private crudService: CrudService) {
    this.empForm = this.generateForm();
  }

  ngOnInit(): void {
    this.getDepartmentData();
  }

  getDepartmentData(): void {
    this.crudService.getDeptData().subscribe(data => {
      this.departmentOptions = data;
      console.log(this.departmentOptions);
    }, errors => {
      alert("Something went wrong!!");
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

  onSubmit() {
    console.log(this.empForm);
    if (this.empForm.status === 'VALID') {
      this.router.navigate(['/crud-operation/emplist']);
    }
  }

  onReset() {
    this.empForm.reset();
  }
}
