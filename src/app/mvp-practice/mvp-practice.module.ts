import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';

import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container.component';
import { MVPPracticeComponent } from '../mvp-practice/mvp-practice.component';
import { EmployeeFormPresentationComponent } from './employee-form-container/employee-form-presentation/employee-form-presentation.component';
import { EmployeeListPresentationComponent } from './employee-list-container/employee-list-presentation/employee-list-presentation.component';
import { MVPPracticeRoutingModule } from './mvp-practice-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    MVPPracticeComponent,
    EmployeeListContainerComponent,
    EmployeeFormContainerComponent,
    EmployeeListPresentationComponent,
    EmployeeFormPresentationComponent
  ],
  imports: [
    CommonModule,
    MVPPracticeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule,
    DragDropModule
  ],
  providers: [
    EmployeeService
  ]
})
export class MVPPracticeModule { }
