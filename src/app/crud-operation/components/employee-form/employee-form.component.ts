import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

///////////////////////////////////////////////////////////////////////////////
import { Department } from 'src/app/shared/models/department.model';
import { Employee } from 'src/app/shared/models/employee.model';
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
  currentEmpDataId?: number = undefined;
  departmentOptions: Department[];

  @Output() closeEvent: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(private fb: FormBuilder, private crudService: CrudService) {
    this.empForm = this.generateForm();
    this.departmentOptions = new Array<Department>();
  }

  ngOnInit(): void {
    this.getDepartmentData();
    if (this.currentEmpDataId) {
      this.isEditMode = true;
      console.log("EDIT MODE");
      this.getEmpToEdit();
    }
  }

  getEmpToEdit(): void {
    this.empForm.patchValue(this.crudService.getEmployeeToEdit().getValue());
    console.log();
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
    this.closeEvent.emit();
  }

  onReset() {
    this.empForm.reset();
    this.submitted = false;
  }

  getControl(cname: string): AbstractControl | null {
    return this.empForm.get(cname);
  }

  onClose() {
    console.log('close');
    this.closeEvent.emit();
  }
}
