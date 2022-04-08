import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ------------------------------------------------------------------------------------------ //
import { CrudWithoutServerRoutingModule } from './crud-without-server-routing.module';
import { EmployeeFormComponent } from './components/crud-form/employee-form.component';
import { EmployeeListViewComponent } from './components/crud-list-view/employee-list-view.component';
import { SharedModule } from '../shared/shared.module';
import { CrudWithoutServerComponent } from './crud-without-server.component';

@NgModule({
  declarations: [
    EmployeeFormComponent,
    EmployeeListViewComponent,
    CrudWithoutServerComponent,
  ],
  imports: [
    CommonModule,
    CrudWithoutServerRoutingModule,
    SharedModule,
  ]
})
export class CrudWithoutServerModule { }
