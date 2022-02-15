import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudWithoutServerRoutingModule } from './crud-without-server-routing.module';
import { EmployeeFormComponent } from './components/crud-form/employee-form.component';
import { EmployeeListViewComponent } from './components/crud-list-view/employee-list-view.component';
import { MapGenderPipe } from './pipes/map-gender.pipe';

@NgModule({
  declarations: [
    EmployeeFormComponent,
    EmployeeListViewComponent,
    MapGenderPipe
  ],
  imports: [
    CommonModule,
    CrudWithoutServerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrudWithoutServerModule { }
