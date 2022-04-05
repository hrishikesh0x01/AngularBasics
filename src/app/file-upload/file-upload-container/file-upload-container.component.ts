import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/////////////////////////////////////////////////////////////
import { Observable } from 'rxjs/internal/Observable';
import { FileData } from '../models/FileData';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-upload-container',
  templateUrl: './file-upload-container.component.html',
  styleUrls: ['./file-upload-container.component.scss']
})
export class FileUploadContainerComponent implements OnInit {
  public uploadedFiles$: Observable<FileData[]>;

  private _filesToUpload: FileData[];

  constructor(private _fileUploadService: FileUploadService, private router: Router) {
    this.uploadedFiles$ = new Observable();
    this._filesToUpload = [];
  }

  ngOnInit(): void {
    this.uploadedFiles$ = this._fileUploadService.getUploadedFiles();
  }

  uploadFiles(files: FileData[]) {
    this._filesToUpload = files;
    const uploadFile = (index: number) => {
      if (index > this._filesToUpload.length - 1) {
        console.log("All files uploaded successfully.");
        this.router.navigateByUrl('/file-upload/list');
      } else {
        this._fileUploadService.uploadFile(this._filesToUpload[index]).subscribe((res: FileData) => {
          console.log(`File ${index} uploaded:`, res);
          uploadFile(index + 1);
        }, (error) => {
          console.error("Some Error occured: ", error);
        }, () => {
          console.log(`File ${index} upload successful.`);
        });
      }
    }
    uploadFile(0);
  }
}
