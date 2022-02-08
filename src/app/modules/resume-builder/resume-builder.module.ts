import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';


@NgModule({
  declarations: [
    ResumeBuilderComponent,
    ResumeViewComponent,
    ResumeFormComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule
  ]
})
export class ResumeBuilderModule { }
