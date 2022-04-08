import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FileData, InvalidFile } from '../../models/FileData';

// ------------------------------------------------------------------------------------------ //
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';
// import { SHA256 } from 'crypto-js';

@Component({
  viewProviders: [FileUploadPresenterService],
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss']
})
export class FileUploadPresentationComponent implements OnInit {
  @Input() public set uploadedFiles(v: FileData[] | null) {
    if (v) {
      v.forEach((file: FileData) => {
        this.fileNames.push(file.name);
      });
    }
  }

  @Input() public set serverFiles(v: File[] | null) {
    if (v) {
      this._serverFiles = v;
    }
  }

  @Output() filesToUpload: EventEmitter<FileData[]>;
  public get serverFiles(): File[] {
    return this._serverFiles;
  }

  // @ViewChild('notifications', { static: true }) notifications!: ViewContainerRef;
  // @ViewChild('toast', { static: true }) toast!: TemplateRef<any>;

  public addedFiles: File[];
  public invalidFiles: InvalidFile[];

  private fileNames: string[] = [];
  private _serverFiles: File[];

  constructor(private _fileUploadPresenter: FileUploadPresenterService, private _changeDetectorRef: ChangeDetectorRef) {
    this._serverFiles = [];
    this.addedFiles = [];
    this.invalidFiles = [];
    this.filesToUpload = new EventEmitter();
  }

  ngOnInit(): void {
    this._fileUploadPresenter.readFiles$.subscribe((data) => {
      this.filesToUpload.emit(data);
    });

    this._fileUploadPresenter.invalidFiles$.subscribe((file: InvalidFile) => {
      this.invalidFiles.push(file);
      setTimeout(() => this.removeToast(file.id), 2000);
      // this.invalidFiles = [...this.invalidFiles];
      // this.notifications?.insert(this.toast.createEmbeddedView({file: file}));
      // console.log(this.invalidFiles);
      // this._changeDetectorRef.markForCheck();
    })
  }

  public removeAddedFile(i: number) {
    this.addedFiles.splice(i, 1);
  }

  public onSubmit() {
    if (this.addedFiles.length) {
      this._fileUploadPresenter.readAllFiles(this.addedFiles);
    }
  }

  public onChange(filesInput: any) {
    console.log(filesInput);
    this._fileUploadPresenter.filterInvalidFiles(filesInput.files, this.addedFiles, this.fileNames);
    console.log('hesoyam', this.addedFiles);
    filesInput.value = "";
  }

  public convertToMB(sizeInKB: number): string {
    return (sizeInKB / (1024 ** 2)).toFixed(2);
  }

  removeToast(id: number) {
    this.invalidFiles.splice(this.invalidFiles.findIndex((file: InvalidFile) => file.id === id), 1);
  }
}
