import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudWithoutServerRoutingModule } from './crud-without-server-routing.module';
import { EmployeeFormComponent } from './components/crud-form/employee-form.component';
import { EmployeeListViewComponent } from './components/crud-list-view/employee-list-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EmployeeFormComponent,
    EmployeeListViewComponent,
  ],
  imports: [
    CommonModule,
    CrudWithoutServerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrudWithoutServerModule { }
