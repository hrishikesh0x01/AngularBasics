import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListViewComponent } from './employee-list-view/employee-list-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'emplist', pathMatch: 'full'
      },
      {
        path: 'add', component: EmployeeFormComponent
      },
      {
        path: 'edit/:id', component: EmployeeFormComponent
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
