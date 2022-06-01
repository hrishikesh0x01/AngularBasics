import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { NotificationComponent } from 'src/app/shared/components/notification/notification.component';
import { FileData, FileDataAdapter, InvalidFile } from '../../models/FileData';

@Injectable({
  providedIn: 'root'
})
export class FileUploadPresenterService {
  public readFiles$: Observable<FileData[]>;
  public invalidFiles$: Observable<InvalidFile>;

  private _readFiles: Subject<FileData[]>;
  private _invalidFiles: Subject<InvalidFile>;


  constructor(private _fileDataAdapter: FileDataAdapter, private overlay: Overlay) {
    this._readFiles = new Subject();
    this.readFiles$ = this._readFiles.asObservable();
    this._invalidFiles = new Subject();
    this.invalidFiles$ = this._invalidFiles.asObservable();
  }

  public filterInvalidFiles(allFiles: FileList, validFiles: File[], alreadyExistingFiles: string[]): any {
    let count: number = 0;
    for (let i = 0; i < allFiles.length; i++) {
      const file = allFiles[i];
      if (this.convertToMB(file.size) >= 2) {
        console.error("File size limit exceeded.");
        this._invalidFiles.next(new InvalidFile(count++, file.name, file.size, "File size limit exceeded."));
        // invalidFiles.push({file: file, msg: "File size limit exceeded."});
      } else if (alreadyExistingFiles.includes(file.name)) {
        console.error("File with same name already added.");
        this._invalidFiles.next(new InvalidFile(count++, file.name, file.size, "File with same name already added."));
        // invalidFiles.push({file: file, msg: "File with same name already added."});
      } else if (!file.type) {
        console.error("File type is not supported OR Tried to add folder.");
        this._invalidFiles.next(new InvalidFile(count++, file.name, file.size, "File type is not supported OR Tried to add folder."));
        // invalidFiles.push({file: file, msg: "File type is not supported OR Tried to add folder."});
      } else {
        validFiles.push(file);
        alreadyExistingFiles.push(file.name);
        console.log("File added successfully.");
      }
    }
    // return invalidFiles;
  }

  /**
   * Reads all the given files.
   * @param files Takes File[].
   */
  public readAllFiles(files: File[]) {
    let filesRemaining = files.length;
    const readFiles = this._readFiles;
    const filesWithContent: FileData[] = [];
    const readFile = (index: number, file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        // let hash;
        let content = reader.result?.toString() ?? '';
        // hash = SHA256(content).toString();
        console.log(content);

        // filesWithContent[index].content = content.split(',')[1];
        // buff[index].hash = hash;

        filesWithContent[index].content = content;
        console.log(index, ':', filesWithContent[index]);
        filesRemaining--;

        if (!filesRemaining) {
          readFiles.next(filesWithContent);
          return;
        }
      }
      reader.readAsDataURL(file);
    }

    files.forEach((file: File, index: number) => {
      filesWithContent.push(this._fileDataAdapter.adapt({
        name: file.name,
        type: file.type,
        size: file.size,
        content: '',
      }));
      readFile(index, file);
    });
  }

  public removeToast(id: number, invalidFiles: InvalidFile[]) {
    return invalidFiles.splice(invalidFiles.findIndex((file: InvalidFile) => file.id === id), 1);
  }

  private convertToMB(sizeInKB: number): number {
    return sizeInKB / (1024 ** 2);
  }

  
  showNotificationToastr(file: InvalidFile): void {
    let notificationToastrRef!: OverlayRef;
    let notificationToastrComponentRef!: ComponentRef<NotificationComponent>;
    let notificationToastrConfig: OverlayConfig = {
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    };

    notificationToastrRef = this.overlay.create(notificationToastrConfig);

    const notificationComponent = new ComponentPortal(NotificationComponent);

    notificationToastrComponentRef = notificationToastrRef.attach(notificationComponent);

    notificationToastrComponentRef.instance.file = file;

    // this.confirmationPopupComponentRef.instance.buttons = [
    //   new Button('Cancel', 'secondary', 'cancel'),
    //   new Button('Delete', 'danger', 'delete'),
    // ]

    notificationToastrRef.backdropClick().subscribe(() => {
      notificationToastrRef.detach();
    });
    notificationToastrComponentRef.instance.remove.subscribe(() => {
      notificationToastrRef.detach();
    });
  }
}
