import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormBasicsRoutingModule } from './reactive-form-basics-routing.module';
import { ReactiveFormBasicsComponent } from './reactive-form-basics.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ReactiveFormBasicsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormBasicsRoutingModule,
    SharedModule
  ]
})
export class ReactiveFormBasicsModule { }
