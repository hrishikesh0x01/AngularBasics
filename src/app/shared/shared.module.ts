import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ------------------------------------------------------------------------------------------ //
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { MapDeptPipe } from './pipes/map-dept.pipe';
import { SearchFromArrayOnPipe } from './pipes/search-from-array-on.pipe';
import { MapGenderPipe } from './pipes/map-gender.pipe';
import { IdToNamePipe } from './pipes/id-to-name.pipe';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    PhoneMaskDirective,
    ConfirmationPopupComponent,
    MapDeptPipe,
    MapGenderPipe,
    SearchFromArrayOnPipe,
    IdToNamePipe,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PhoneMaskDirective,
    ConfirmationPopupComponent,
    IdToNamePipe,
    MapDeptPipe,
    MapGenderPipe,
    SearchFromArrayOnPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
