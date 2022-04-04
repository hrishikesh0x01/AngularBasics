import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileListContainerComponent } from './file-list-container/file-list-container.component';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: FileListContainerComponent },
  { path: 'add', component: FileUploadContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadRoutingModule { }
