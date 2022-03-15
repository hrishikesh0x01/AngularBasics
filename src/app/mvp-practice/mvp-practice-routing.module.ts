import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { MVPPracticeComponent } from './mvp-practice.component';

const routes: Routes = [
  {
    path: '', component: MVPPracticeComponent,
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list', component: EmployeeListContainerComponent
      },
      {
        path: 'add', component: EmployeeFormContainerComponent
      },
      {
        path: 'edit/:id', component: EmployeeFormContainerComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MVPPracticeRoutingModule { }
