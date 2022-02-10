import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './directives/phone-mask.directive';

@NgModule({
  declarations: [
    PhoneMaskDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
