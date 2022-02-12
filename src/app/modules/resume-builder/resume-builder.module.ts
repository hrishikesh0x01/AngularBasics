import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeListComponent } from './components/resume-list/resume-list.component';


@NgModule({
  declarations: [
    ResumeViewComponent,
    ResumeFormComponent,
    ResumeListComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResumeBuilderModule { }
