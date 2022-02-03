import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudOperationComponent } from './crud-operation.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListViewComponent } from './employee-list-view/employee-list-view.component';

const routes: Routes = [
  {
    path: '', component: CrudOperationComponent,
    children: [
      {
        path: '', component: EmployeeListViewComponent
      },
      {
        path: 'add', component: EmployeeFormComponent
      },
      {
        path: 'emplist', component: EmployeeListViewComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudOperationRoutingModule { }
