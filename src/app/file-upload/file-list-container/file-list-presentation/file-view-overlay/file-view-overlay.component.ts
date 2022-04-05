import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FileData } from 'src/app/file-upload/models/FileData';

////////////////////////////////////////////////////////////////
import { Button } from 'src/app/shared/models/button.model';

@Component({
  selector: 'app-file-view-overlay',
  templateUrl: './file-view-overlay.component.html',
  styleUrls: ['./file-view-overlay.component.scss']
})
export class FileViewOverlayComponent implements OnInit {
  @Input() buttons!: Button[];
  @Output() buttonClick: EventEmitter<string>;

  private _file!: FileData;
  @Input() public set file(v: FileData | null) {
    if (v) {
      console.log(v)
      this._file = v;
    }
  }

  public get file(): FileData {
    return this._file;
  }

  public safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.buttonClick = new EventEmitter();
  }

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this._file.content);
  }

  onButtonClick(name: string) {
    this.buttonClick.emit(name);
  }
}
