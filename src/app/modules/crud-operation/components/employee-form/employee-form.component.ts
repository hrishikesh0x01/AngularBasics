import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  submitted: boolean = false;
  currentEmpDataId: number;
  departmentOptions: Department[];

  constructor(private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute, private crudService: CrudService) {}

  ngOnInit(): void {
    this.empForm = this.generateForm();
    this.getDepartmentData();
    this.currentEmpDataId = this.activeRoute.snapshot.params['id'];
    if (this.currentEmpDataId) {
      this.isEditMode = true;
      console.log("EDIT MODE");
      this.getEmpToEdit();
      console.log("Are bhai bhai bhai....", );
    }
  }

  getEmpToEdit(): void {
    this.empForm.patchValue(this.crudService.getEmployeeToEdit().getValue());
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
      emailId: ['', Validators.pattern(/^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~][a-zA-Z0-9!#$%&'*+-/=?^_`{|}~.]*@[a-zA-Z]*.com$/)],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      gender: ['male'],
      empdate: ['', Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      dept: [0]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.empForm);
    if (this.empForm.status === 'VALID') {
      this.saveEmployeeData();
      this.router.navigate(['/crud-operation/emplist']);
    }
  }

  saveEmployeeData() {
    let emp: Employee;
    if (this.isEditMode) {
      emp = {...this.empForm.value, id:this.currentEmpDataId};
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
    this.submitted = false;
  }

  getControl(cname: string): AbstractControl | null {
    return this.empForm.get(cname)
  }
}
