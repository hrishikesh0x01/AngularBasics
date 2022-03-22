import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';

////////////////////////////////////////////////////////////////////////////////
import { CrudOperationRoutingModule } from './crud-operation-routing.module';
import { EmployeeListViewComponent } from './components/employee-list-view/employee-list-view.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EmployeeListViewComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    CrudOperationRoutingModule,
    SharedModule,
    OverlayModule,
    DragDropModule
  ]
})
export class CrudOperationModule { }
