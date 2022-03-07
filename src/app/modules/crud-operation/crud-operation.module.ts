import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CrudOperationRoutingModule } from './crud-operation-routing.module';
import { EmployeeListViewComponent } from './components/employee-list-view/employee-list-view.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { MapDeptPipe } from './pipes/map-dept.pipe';
import { SearchFromArrayOnPipe } from './pipes/search-from-array-on.pipe';

@NgModule({
  declarations: [
    EmployeeListViewComponent,
    EmployeeFormComponent,
    MapDeptPipe,
    SearchFromArrayOnPipe
  ],
  imports: [
    CommonModule,
    CrudOperationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrudOperationModule { }
