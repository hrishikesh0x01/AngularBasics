import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
