import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class EmployeeFormPresenterService {

  constructor(private fb: FormBuilder) { }

  createForm(): FormGroup {
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
}
