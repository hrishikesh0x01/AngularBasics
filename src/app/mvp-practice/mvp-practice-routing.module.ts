import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorFormContainerComponent } from './mentor-form-container/mentor-form-container.component';
import { MentorListContainerComponent } from './mentor-list-container/mentor-list-container.component';
import { MVPPracticeComponent } from './mvp-practice.component';

const routes: Routes = [
  {
    path: '', component: MVPPracticeComponent,
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list', component: MentorListContainerComponent
      },
      {
        path: 'add', component: MentorFormContainerComponent
      },
      {
        path: 'edit/:id', component: MentorFormContainerComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MVPPracticeRoutingModule { }
