import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CrudOperationRoutingModule } from './crud-operation-routing.module';
import { CrudOperationComponent } from './crud-operation.component';
import { EmployeeListViewComponent } from './employee-list-view/employee-list-view.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudOperationComponent,
    EmployeeListViewComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    CrudOperationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CrudOperationModule { }
