import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-basics',
  templateUrl: './reactive-form-basics.component.html',
  styleUrls: ['./reactive-form-basics.component.scss']
})
export class ReactiveFormBasicsComponent implements OnInit {
  demoForm: FormGroup;
  submitted: boolean = false;
 
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.demoForm = this.createContactForm();
  }

  createContactForm():FormGroup {
    return this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],  
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.maxLength(150), Validators.minLength(20)]],
      mobile: ['', [Validators.required, Validators.pattern(/[0-9]{10}$/)]],
      age: ['', ]
    });
  }

  onSelectionChange(event: Event) {
    if ((event.target as HTMLInputElement).value == '0') {
      // Removes single or multiple synchronous validators
      this.demoForm.controls['fullName'].removeValidators(Validators.required);
      this.demoForm.controls['fullName'].updateValueAndValidity();
      console.log(this.getControls['fullName']);
      // Removes all synchronous validators
      // this.demoForm.controls['fullName'].clearValidators();
      // this.demoForm.controls['fullName'].updateValueAndValidity();
    } else {
      // sets new validators kind of replaces the current ones
      // this.demoForm.controls['fullName'].setValidators(Validators.required);

      // adds new validators does not affect other validators.
      this.demoForm.controls['fullName'].addValidators(Validators.required);
      this.demoForm.controls['fullName'].updateValueAndValidity();
      console.log(this.demoForm);
    }
  }

  showData() {
    this.submitted = true;
    console.log(this.demoForm);
  }

  onReset() {
    this.demoForm.reset();
    this.submitted = false;
  }

  get getControls() {
    return this.demoForm.controls;
  }
}
