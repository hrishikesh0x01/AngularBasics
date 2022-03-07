import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';

@NgModule({
  declarations: [
    PhoneMaskDirective,
    ConfirmationPopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhoneMaskDirective
  ]
})
export class SharedModule { }
