import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(JSON.stringify(this.addedFiles.map((file) => {
      return { name: file.name, type: file.type, size: file.size };
    })));
  }

  addedFiles: File[] = [];

  onChange(files: any) {
    let newFiles = files.target.files;
    console.log(newFiles)

    this.addedFiles = [];
    for (const file of newFiles) {
      if (this.convertToMB(file.size) < 2) {
        console.log("ok");
        this.addedFiles.push(file);
      } else {
        console.log("Nikaal bc");
      }
    }
    files.target.value = "";
    console.log(files.target.files);
    console.log(this.addedFiles);
  }

  convertToMB(sizeInKB: number): number {
    return sizeInKB / (1024 ** 2);
  }
}
