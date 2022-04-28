import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormBasicsRoutingModule } from './reactive-form-basics-routing.module';
import { ReactiveFormBasicsComponent } from './reactive-form-basics.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressFormComponent } from './address-form/address-form.component';

@NgModule({
  declarations: [
    ReactiveFormBasicsComponent,
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormBasicsRoutingModule,
    SharedModule
  ]
})
export class ReactiveFormBasicsModule { }
