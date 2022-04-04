import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

///////////////////////////////////////////////////////////////////////////
import { FileListPresenterService } from '../file-list-presenter/file-list-presenter.service';

@Component({
  viewProviders: [FileListPresenterService],
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  styleUrls: ['./file-list-presentation.component.scss']
})
export class FileListPresentationComponent implements OnInit {
  private _uploadedFiles: any;
  @Input() public set uploadedFiles(v: any) {
    if (v) {
      this._uploadedFiles = v;
    }
  }

  @Output() delete: EventEmitter<number>;

  public get uploadedFiles(): any {
    return this._uploadedFiles;
  }

  constructor(private _fileListPresenter: FileListPresenterService) {
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this._fileListPresenter.delete$.subscribe((id: number) => {
      this.delete.emit(id);
    })
  }

  viewFile(file: any): void {
    this._fileListPresenter.displayFileViewOverlay(file);
  }

  deleteFile(id: number): void {
    this._fileListPresenter.displayConfirmationPopup(id);
  }
}
