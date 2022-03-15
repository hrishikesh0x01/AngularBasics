import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

////////////////////////////////////////////////////////////////////////////////
import { CrudOperationRoutingModule } from './crud-operation-routing.module';
import { EmployeeListViewComponent } from './components/employee-list-view/employee-list-view.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    EmployeeListViewComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    CrudOperationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    DragDropModule
  ]
})
export class CrudOperationModule { }
