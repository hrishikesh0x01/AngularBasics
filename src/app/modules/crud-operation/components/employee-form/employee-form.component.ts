import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Department } from '../../models/department.model';
import { Employee } from '../../models/employee.model';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  empForm: FormGroup;
  isEditMode: boolean = false;
  currentEmpDataId: number;
  departmentOptions: Department[];
  subscriptions: Observable<Employee>[];

  constructor(private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute, private crudService: CrudService) {}

  ngOnInit(): void {
    this.empForm = this.generateForm();
    this.getDepartmentData();
    if (this.activeRoute.snapshot.params['id']) {
      this.isEditMode = true;
      console.log("EDIT MODE");
      this.getCustomerToEdit();
    }
  }

  getCustomerToEdit(): void {
    this.crudService.getEmployeeToEdit().subscribe(data => {
      this.empForm.patchValue(data);
      this.currentEmpDataId = data.id;
      console.log(data);
    }, errors => {
      alert("Something went wrong!! -- edit" + errors);
    });
  }

  getDepartmentData(): void {
    this.crudService.getDeptData().subscribe(data => {
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

  onSubmit() {
    console.log(this.empForm);
    if (this.empForm.status === 'VALID') {
      this.saveEmployeeData();
      this.router.navigate(['/crud-operation/emplist']);
    } else {
      alert("Enter VALID data..!!!");
    }
  }

  saveEmployeeData() {
    let emp: Employee;
    if (this.isEditMode) {
      emp = {...this.empForm.value, id:this.currentEmpDataId};
      console.log("helo");
    } else {
      emp = this.empForm.value;
    }
    console.log(emp);
    this.crudService.saveEmp(emp).subscribe(data => {
      console.log("Like Share Subscribe...\nKeep supporting...");
    });
  }

  onReset() {
    this.empForm.reset();
  }

  getControl(cname: string): AbstractControl | null {
    return this.empForm.get(cname)
  }
}