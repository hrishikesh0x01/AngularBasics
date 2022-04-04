import { Component, EventEmitter, Input, OnInit, Output, Sanitizer, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

///////////////////////////////////////////////////////////
import { SHA256 } from 'crypto-js';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  private _serverFiles: File[] = [];
  public get serverFiles(): File[] {
    return this._serverFiles;
  }
  @Input() public set serverFiles(v: File[] | null) {
    if (v) {
      this._serverFiles = v;
    }
  }

  @Output() filesEmitter: EventEmitter<any>;

  public addedFiles: File[];
  public readFiles: any[];

  constructor(private sanitizer: DomSanitizer) {
    this.addedFiles = [];
    this.readFiles = [];

    this.filesEmitter = new EventEmitter();
  }

  ngOnInit(): void {
    this.filesEmitter.subscribe((data) => {
      console.log(data);
    });
  }

  /**
   * Reads all the given files.
   * @param files Takes File[].
   * @param buff Output Array.
   */
   readMultipleFiles(files: File[], buff: any) {
    let reader = new FileReader();
    let emitter = this.filesEmitter;
    const readFile = (index: number) => {
      if (index >= files.length) {
        emitter.emit(buff);
        return;
      }
      var file = files[index];
      reader.onload = function (e) {
        let content = '';
        let hash;
        content = reader.result?.toString() ?? '';
        hash = SHA256(content).toString();
        console.log(content);

        buff[index].content = content;
        buff[index].hash = hash;
        console.log(buff);

        // Read next file
        readFile(index + 1)
      }
      reader.readAsDataURL(file);
    }
    readFile(0);
  }

  onSubmit() {
    this.readFiles = this.addedFiles.map((file) => {
      return { name: file.name, type: file.type, size: file.size, content: null, hash: null };
    });
    this.readMultipleFiles(this.addedFiles, this.readFiles);
  }

  onChange(filesInput: any) {
    this.addedFiles = [];
    for (const file of filesInput.files) {
      console.log(file);
      if (this.convertToMB(file.size) < 2) {
        this.addedFiles.push(file);
      } else {
        console.log("Nikaal bc");
      }
    }
    console.log('dsdf', this.addedFiles);
  }

  convertToMB(sizeInKB: number): number {
    return sizeInKB / (1024 ** 2);
  }
}
