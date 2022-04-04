import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  private _file: any;
  @Input() public set file(v: any) {
    if (v) {
      console.log(v)
      this._file = v;
    }
  }

  public safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.buttonClick = new EventEmitter();
  }

  ngOnInit(): void {
    const byteCharacters = atob(this._file.content);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    this.safeUrl = this.bypassAndSanitize(URL.createObjectURL(new Blob([byteArray], { type: this._file.type })));
  }

  onButtonClick(name: string) {
    this.buttonClick.emit(name);
  }

  bypassAndSanitize(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
