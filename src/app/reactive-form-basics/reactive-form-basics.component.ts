import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-basics',
  templateUrl: './reactive-form-basics.component.html',
  styleUrls: ['./reactive-form-basics.component.css']
})
export class ReactiveFormBasicsComponent implements OnInit {
  demoForm: FormGroup ;
 
  constructor(private fb: FormBuilder) { 
    this.createContactForm();
  }

  ngOnInit(): void {
   
  }

  createContactForm(){
    this.demoForm = this.fb.group({
      fullName: [''],  
      email: [''],
      message: [''],
      mobile: ['']
    });
  }
}
