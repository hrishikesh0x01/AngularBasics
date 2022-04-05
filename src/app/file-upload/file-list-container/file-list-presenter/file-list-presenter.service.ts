import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

/////////////////////////////////////////////////////////////////////////////////////
import { Button } from 'src/app/shared/models/button.model';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { FileViewOverlayComponent } from '../file-list-presentation/file-view-overlay/file-view-overlay.component';

@Injectable()
export class FileListPresenterService {
  public get delete$(): Observable<number> {
    return this._delete$;
  }
  
  private _delete: Subject<number>;
  private _delete$: Observable<number>;

  constructor(private overlay: Overlay) {
    this._delete = new Subject();
    this._delete$ = this._delete.asObservable();
  }

  private _confirmationPopupRef!: OverlayRef;
  private _confirmationPopupComponentRef!: ComponentRef<ConfirmationPopupComponent>;

  public displayConfirmationPopup(id?: number): void {
    let confirmationPopupConfig: OverlayConfig = {
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    };

    this._confirmationPopupRef = this.overlay.create(confirmationPopupConfig);

    const popupComponent = new ComponentPortal(ConfirmationPopupComponent);

    this._confirmationPopupComponentRef = this._confirmationPopupRef.attach(popupComponent);

    this._confirmationPopupComponentRef.instance.msg = "Are you sure you want to delete ID: " + id + "?";

    this._confirmationPopupComponentRef.instance.buttons = [
      new Button('Cancel', 'secondary', 'cancel'),
      new Button('Delete', 'danger', 'delete'),
    ]

    this._closeConfirmationPopup(id);
  }

  private _closeConfirmationPopup(id?: number): void {
    this._confirmationPopupRef.backdropClick().subscribe(() => {
      this._confirmationPopupRef.detach();
    });

    this._confirmationPopupComponentRef.instance.buttonClick.subscribe((val: string) => {
      if (val === 'delete' && id) {
        this._delete.next(id);
      }
      this._confirmationPopupRef.detach();
    });
  }

  private _fileViewOverlayRef!: OverlayRef;
  private _fileViewOverlayComponentRef!: ComponentRef<FileViewOverlayComponent>;

  public displayFileViewOverlay(file: any): void {
    let viewOverlayConfig: OverlayConfig = {
      hasBackdrop: true,
      backdropClass: "file-view-overlay-backdrop",
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically().width('75%').height('75%')
    };

    this._fileViewOverlayRef = this.overlay.create(viewOverlayConfig);

    const viewOverlayComponent = new ComponentPortal(FileViewOverlayComponent);

    this._fileViewOverlayComponentRef = this._fileViewOverlayRef.attach(viewOverlayComponent);

    this._fileViewOverlayComponentRef.instance.file = file;

    this._fileViewOverlayComponentRef.instance.buttons = [
      new Button('Close', 'secondary', 'close'),
    ];

    this._closeFileViewOverlay();
  }

  private _closeFileViewOverlay(): void {
    this._fileViewOverlayRef.backdropClick().subscribe(() => {
      this._fileViewOverlayRef.detach();
    });

    this._fileViewOverlayComponentRef.instance.buttonClick.subscribe((val) => {
      if (val === 'close') {
        this._fileViewOverlayRef.detach();
      }
    });
  }
}
