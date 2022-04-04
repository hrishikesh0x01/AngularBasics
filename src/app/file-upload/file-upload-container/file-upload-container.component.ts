import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/////////////////////////////////////////////////////////////
import { Observable } from 'rxjs/internal/Observable';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-upload-container',
  templateUrl: './file-upload-container.component.html',
  styleUrls: ['./file-upload-container.component.scss']
})
export class FileUploadContainerComponent implements OnInit {
  uploadedFiles$: Observable<any>;

  filesToUpload: any;

  constructor(private _fileUploadService: FileUploadService, private router: Router) {
    this.uploadedFiles$ = new Observable();
  }

  ngOnInit(): void {
    this.uploadedFiles$ = this._fileUploadService.getUploadedFiles();
  }

  uploadFiles(filesToUpload: any) {
    this.filesToUpload = filesToUpload;
    const uploadFile = (index: number) => {
      if (index > this.filesToUpload.length - 1) {
        console.log("All files uploaded successfully.");
        this.router.navigateByUrl('/file-upload/list');
      } else {
        this._fileUploadService.uploadFile(this.filesToUpload[index]).subscribe((res: any) => {
          console.log(`File ${index} uploaded:`, res);
          uploadFile(index + 1);
        });
      }
    }
    uploadFile(0);
  }
}
