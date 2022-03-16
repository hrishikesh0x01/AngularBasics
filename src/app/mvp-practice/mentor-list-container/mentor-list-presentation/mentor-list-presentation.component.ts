import { ChangeDetectionStrategy, Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

//////////////////////////////////////////////////////////////////////
import { Mentor } from 'src/app/shared/models/mentor.model';
import { Department } from 'src/app/shared/models/department.model';
import { MentorListPresenterService } from '../mentor-list-presenter/mentor-list-presenter.service';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { Button } from 'src/app/shared/models/button.model';

@Component({
  viewProviders: [MentorListPresenterService],
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorListPresentationComponent implements OnInit {

  private _searchString: string;
  public set searchString(val: string) {
    this._searchString = val;
  }
  public get searchString(): string {
    return this._searchString;
  }

  @Output() public displayFormEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() public delete: EventEmitter<number> = new EventEmitter<number>();

  private _departmentOptions: Department[];
  @Input() public set departmentOptions(val: Department[]) {
    this._departmentOptions = val;
  }
  public get departmentOptions(): Department[] {
    return this._departmentOptions;
  }

  private _mentorData!: Mentor[];
  @Input() public set mentorData(val: Mentor[] | null) {
    if (val) {
      this._mentorData = val;
    }
  }
  public get mentorData(): Mentor[] {
    return this._mentorData;
  }

  constructor(private mentorListPresenter: MentorListPresenterService, private router: Router, private overlay: Overlay) {
    this._departmentOptions = new Array<Department>();
    this._searchString = "";
  }

  ngOnInit(): void {
    this.mentorListPresenter.delete$.subscribe(id => {
      this.delete.emit(id);
    })
  }

  confirmationPopupRef!: OverlayRef;
  confirmationPopupComponentRef!: ComponentRef<ConfirmationPopupComponent>;

  displayConfirmationPopup(id: number): void {
    let formOverlayConfig: OverlayConfig = {
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    };

    this.confirmationPopupRef = this.overlay.create(formOverlayConfig);

    const formComponent = new ComponentPortal(ConfirmationPopupComponent);

    this.confirmationPopupComponentRef = this.confirmationPopupRef.attach(formComponent);

    this.confirmationPopupComponentRef.instance.msg = "Are you sure you want to delete ID: " + id + "?";

    this.confirmationPopupComponentRef.instance.buttons = [
      new Button('Cancel', 'secondary', 'cancel'),
      new Button('Delete', 'danger', 'delete'),
    ]

    this.closeConfirmationPopup(id);
  }

  closeConfirmationPopup(id: number): void {
    this.confirmationPopupRef.backdropClick().subscribe(() => {
      this.confirmationPopupRef.detach();
    });

    this.confirmationPopupComponentRef.instance.buttonClick.subscribe((val) => {
      if (val === 'delete') {
        this.mentorListPresenter.delete(id);
      }
      this.confirmationPopupRef.detach();
    });
  }

  displayForm(id?: number) {
    if (id) {
      this.router.navigateByUrl(`/mvp-practice/edit/${id}`);
    } else {
      this.router.navigateByUrl('/mvp-practice/add');
    }
  }

  drop(event: CdkDragDrop<Mentor[]>) {
    moveItemInArray(this.mentorData, event.previousIndex, event.currentIndex);
  }
}
