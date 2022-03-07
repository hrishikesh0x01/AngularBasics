import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeListComponent } from './components/resume-list/resume-list.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';

const routes: Routes = [
  { path: '', redirectTo:'list', pathMatch:'full' },
  { path:'list', component: ResumeListComponent },
  { path: 'form', component: ResumeFormComponent },
  { path: 'view/:id', component: ResumeViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
