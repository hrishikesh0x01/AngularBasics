import { Component, OnInit } from '@angular/core';

////////////////////////////////////////////////////////////
import { Observable } from 'rxjs/internal/Observable';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-list-container',
  templateUrl: './file-list-container.component.html',
  styleUrls: ['./file-list-container.component.scss']
})
export class FileListContainerComponent implements OnInit {
  public uploadedFiles$: Observable<any>;

  constructor(private _fileUploadService: FileUploadService) {
    this.uploadedFiles$ = new Observable();
  }

  ngOnInit(): void {
    this.uploadedFiles$ = this._fileUploadService.getUploadedFiles();
  }

  public delete(id: number): void {
    this._fileUploadService.deleteFile(id).subscribe(res => {
      console.log("Deleted: ", id);
      this.uploadedFiles$ = this._fileUploadService.getUploadedFiles();
    });
  }
}
