import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { MentorListContainerComponent } from './mentor-list-container/mentor-list-container.component';
import { MentorFormContainerComponent } from './mentor-form-container/mentor-form-container.component';
import { MVPPracticeComponent } from '../mvp-practice/mvp-practice.component';
import { MentorFormPresentationComponent } from './mentor-form-container/mentor-form-presentation/mentor-form-presentation.component';
import { MentorListPresentationComponent } from './mentor-list-container/mentor-list-presentation/mentor-list-presentation.component';
import { MVPPracticeRoutingModule } from './mvp-practice-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MentorService } from './services/mentor.service';
import { FilterPresentationComponent } from './mentor-list-container/mentor-list-presentation/filter-presentation/filter-presentation.component';

@NgModule({
  declarations: [
    MVPPracticeComponent,
    MentorListContainerComponent,
    MentorFormContainerComponent,
    MentorListPresentationComponent,
    MentorFormPresentationComponent,
    FilterPresentationComponent
  ],
  imports: [
    CommonModule,
    MVPPracticeRoutingModule,
    SharedModule,
    OverlayModule,
    DragDropModule
  ],
  providers: [
    MentorService
  ]
})
export class MVPPracticeModule { }
