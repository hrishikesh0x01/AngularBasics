import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class FileUploadPresenterService {
  private _readFiles : Subject<any>;
  public readFiles$ : Observable<any>;

  constructor() {
    this._readFiles = new Subject();
    this.readFiles$ = this._readFiles.asObservable();
  }

  filterInvalidFiles(allFiles: File[], alreadyExistingFiles: any): File[] {
    const validFiles = [];
    for (const file of allFiles) {
      console.log(file);
      if (this.convertToMB(file.size) < 2 && !alreadyExistingFiles.includes(file.name)) {
        validFiles.push(file);
        alreadyExistingFiles.push(file.name);
        // console.log(alreadyExistingFiles);
      } else {
        console.error("File size limit exceeded or File with same name already added.");
      }
    }
    return validFiles;
  }

  mapFiles(files: File[]): any {
    return files.map((file) => {
      // return { name: file.name, type: file.type, size: file.size, content: null, hash: null };
      return { name: file.name, type: file.type, size: file.size, content: null };
    });
  }

  /**
   * Reads all the given files.
   * @param files Takes File[].
   * @param filesWithContent Output Array.
   */
  readAllFiles(files: File[]) {
    const reader = new FileReader();
    const readFiles = this._readFiles;
    const filesWithContent = this.mapFiles(files);
    const readFile = (index: number) => {
      if (index >= files.length) {
        readFiles.next(filesWithContent);
        return;
      }
      let file = files[index];
      reader.onload = (e) => {
        let content = '';
        // let hash;
        content = reader.result?.toString() ?? '';
        // hash = SHA256(content).toString();
        console.log(content);

        filesWithContent[index].content = content.split(',')[1];
        // buff[index].hash = hash;
        console.log(filesWithContent);

        // Read next file
        readFile(index + 1)
      }
      reader.readAsDataURL(file);
    }
    readFile(0);
  }

  private convertToMB(sizeInKB: number): number {
    return sizeInKB / (1024 ** 2);
  }
}
