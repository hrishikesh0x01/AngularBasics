import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

////////////////////////////////////////////////////////////////////////////////
import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeListComponent } from './components/resume-list/resume-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResumeService } from './services/resume.service';

@NgModule({
  declarations: [
    ResumeViewComponent,
    ResumeFormComponent,
    ResumeListComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    SharedModule
  ],
  providers: [
    ResumeService
  ]
})
export class ResumeBuilderModule { }
