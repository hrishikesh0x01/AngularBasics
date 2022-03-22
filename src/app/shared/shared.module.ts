import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

///////////////////////////////////////////////////////////////////////////////////
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { MapDeptPipe } from './pipes/map-dept.pipe';
import { SearchFromArrayOnPipe } from './pipes/search-from-array-on.pipe';
import { MapGenderPipe } from './pipes/map-gender.pipe';

@NgModule({
  declarations: [
    PhoneMaskDirective,
    ConfirmationPopupComponent,
    MapDeptPipe,
    MapGenderPipe,
    SearchFromArrayOnPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PhoneMaskDirective,
    ConfirmationPopupComponent,
    MapDeptPipe,
    MapGenderPipe,
    SearchFromArrayOnPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
