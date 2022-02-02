import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormBasicsRoutingModule } from './reactive-form-basics-routing.module';
import { ReactiveFormBasicsComponent } from './reactive-form-basics.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReactiveFormBasicsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormBasicsRoutingModule
  ]
})
export class ReactiveFormBasicsModule { }
