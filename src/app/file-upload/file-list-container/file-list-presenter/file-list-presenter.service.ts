import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

/////////////////////////////////////////////////////////////////////////////////////
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { Button } from 'src/app/shared/models/button.model';
import { FileViewOverlayComponent } from '../file-list-presentation/file-view-overlay/file-view-overlay.component';

@Injectable()
export class FileListPresenterService {
  private _delete: Subject<number>;
  private _delete$: Observable<number>;

  public get delete$(): Observable<number> {
    return this._delete$;
  }

  constructor(private overlay: Overlay) {
    this._delete = new Subject();
    this._delete$ = this._delete.asObservable();
  }

  confirmationPopupRef!: OverlayRef;
  confirmationPopupComponentRef!: ComponentRef<ConfirmationPopupComponent>;

  displayConfirmationPopup(id?: number): void {
    let confirmationPopupConfig: OverlayConfig = {
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    };

    this.confirmationPopupRef = this.overlay.create(confirmationPopupConfig);

    const popupComponent = new ComponentPortal(ConfirmationPopupComponent);

    this.confirmationPopupComponentRef = this.confirmationPopupRef.attach(popupComponent);

    this.confirmationPopupComponentRef.instance.msg = "Are you sure you want to delete ID: " + id + "?";

    this.confirmationPopupComponentRef.instance.buttons = [
      new Button('Cancel', 'secondary', 'cancel'),
      new Button('Delete', 'danger', 'delete'),
    ]

    this.closeConfirmationPopup(id);
  }

  private closeConfirmationPopup(id?: number): void {
    this.confirmationPopupRef.backdropClick().subscribe(() => {
      this.confirmationPopupRef.detach();
    });

    this.confirmationPopupComponentRef.instance.buttonClick.subscribe((val) => {
      if (val === 'delete' && id) {
        this._delete.next(id);
      }
      this.confirmationPopupRef.detach();
    });
  }

  fileViewOverlayRef!: OverlayRef;
  fileViewOverlayComponentRef!: ComponentRef<FileViewOverlayComponent>;

  displayFileViewOverlay(file: any): void {
    let viewOverlayConfig: OverlayConfig = {
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically().width('75%').height('75%')
    };

    this.fileViewOverlayRef = this.overlay.create(viewOverlayConfig);

    const viewOverlayComponent = new ComponentPortal(FileViewOverlayComponent);

    this.fileViewOverlayComponentRef = this.fileViewOverlayRef.attach(viewOverlayComponent);

    this.fileViewOverlayComponentRef.instance.file = file;

    this.fileViewOverlayComponentRef.instance.buttons = [
      new Button('Close', 'secondary', 'close'),
    ];

    this.closeFileViewOverlay();
  }

  private closeFileViewOverlay(): void {
    this.fileViewOverlayRef.backdropClick().subscribe(() => {
      this.fileViewOverlayRef.detach();
    });

    this.fileViewOverlayComponentRef.instance.buttonClick.subscribe((val) => {
      if (val === 'close') {
        this.confirmationPopupRef.detach();
      }
    });
  }
}
