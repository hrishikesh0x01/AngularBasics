import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  empForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.empForm = this.generateForm();
  }

  ngOnInit(): void {
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
