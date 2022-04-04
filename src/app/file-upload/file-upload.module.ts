import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { SharedModule } from '../shared/shared.module';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';
import { FileUploadPresentationComponent } from './file-upload-container/file-upload-presentation/file-upload-presentation.component';
import { FileListContainerComponent } from './file-list-container/file-list-container.component';
import { FileListPresentationComponent } from './file-list-container/file-list-presentation/file-list-presentation.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FileViewOverlayComponent } from './file-list-container/file-list-presentation/file-view-overlay/file-view-overlay.component';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadContainerComponent,
    FileUploadPresentationComponent,
    FileListContainerComponent,
    FileListPresentationComponent,
    FileViewOverlayComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    SharedModule,
    OverlayModule
  ]
})
export class FileUploadModule { }
