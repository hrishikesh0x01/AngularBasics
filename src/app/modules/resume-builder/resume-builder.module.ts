import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';


@NgModule({
  declarations: [
    ResumeBuilderComponent,
    ResumeViewComponent,
    ResumeFormComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResumeBuilderModule { }
