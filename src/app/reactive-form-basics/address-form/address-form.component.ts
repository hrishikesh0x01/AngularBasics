import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Output() addrFormEvent: EventEmitter<FormGroup>;

  addrForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.addrFormEvent = new EventEmitter();
    this.addrForm = {} as FormGroup;
  }
  
  ngOnInit(): void {
    console.log('true');
    this.addrForm = this._fb.group({
      address: [''],
      state: [''],
      city: [''],
    });
    this.addrFormEvent.emit(this.addrForm);
  }
}
