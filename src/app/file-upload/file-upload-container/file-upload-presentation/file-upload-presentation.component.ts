import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

///////////////////////////////////////////////////////////
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';
// import { SHA256 } from 'crypto-js';

@Component({
  viewProviders: [FileUploadPresenterService],
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss']
})
export class FileUploadPresentationComponent implements OnInit {
  // private _uploadedFiles: any;
  private fileNames: string[] = [];
  @Input() public set uploadedFiles(v: any) {
    if (v) {
      v.forEach((file: any) => {
        this.fileNames.push(file.name);
      });
      // this._uploadedFiles = v;
    }
  }

  private _serverFiles: File[] = [];
  public get serverFiles(): File[] {
    return this._serverFiles;
  }
  @Input() public set serverFiles(v: File[] | null) {
    if (v) {
      this._serverFiles = v;
    }
  }

  @Output() filesToUpload: EventEmitter<any>;

  public addedFiles: File[];
  // public readFiles: any[];

  constructor(private _fileUploadPresenter: FileUploadPresenterService) {
    this.addedFiles = [];
    // this.readFiles = [];

    this.filesToUpload = new EventEmitter();
  }

  ngOnInit(): void {
    this._fileUploadPresenter.readFiles$.subscribe((data) => {
      this.filesToUpload.emit(data);
    });
  }

  removeAddedFile(i: number) {
    this.addedFiles.splice(i, 1);
  }

  onSubmit() {
    this._fileUploadPresenter.readAllFiles(this.addedFiles);
  }

  onChange(filesInput: any) {
    this.addedFiles = this._fileUploadPresenter.filterInvalidFiles(filesInput.files, this.fileNames);
    console.log('hesoyam', this.addedFiles);
  }

  public convertToMB(sizeInKB: number): string {
    return (sizeInKB / (1024 ** 2)).toFixed(2);
  }
}
