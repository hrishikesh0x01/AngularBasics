import { ChangeDetectionStrategy, Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

//////////////////////////////////////////////////////////////////////
import { Employee } from 'src/app/shared/models/employee.model';
import { Department } from 'src/app/shared/models/department.model';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { Button } from 'src/app/shared/models/button.model';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  viewProviders: [EmployeeListPresenterService],
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListPresentationComponent implements OnInit {

  searchString: string;

  @Output() public displayFormEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() public delete: EventEmitter<number> = new EventEmitter<number>();
  
  private _departmentOptions: Department[];
  @Input() public set departmentOptions(val: Department[]) {
    if (val) {
      this._departmentOptions = val;
    }
  }
  public get departmentOptions(): Department[] {
    return this._departmentOptions;
  }
  
  private _employeeData!: Employee[];
  @Input() public set employeeData(val: Employee[] | null) {
    if (val) {
      this._employeeData = val;
    }
  }
  public get employeeData(): Employee[] {
    return this._employeeData;
  }

  constructor(private employeeListPresenter: EmployeeListPresenterService, private router: Router, private overlay: Overlay) { }

  ngOnInit(): void {
    this.employeeListPresenter.delete$.subscribe(id => {
      this.delete.emit(id);
    })
  }

  editEmp(emp: Employee) {

  }

  confirmationPopupRef: OverlayRef;
  confirmationPopupComponentRef: ComponentRef<ConfirmationPopupComponent>;

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
    this.confirmationPopupComponentRef.instance.buttonClick.subscribe((val) => {
      if (val === 'delete') {
        this.employeeListPresenter.delete(id);
      }
      this.confirmationPopupRef.detach();
    });
  }

  displayForm(id?: number) {
    this.displayFormEvent.emit(id);
  }

  drop(event: CdkDragDrop<Employee[]>) {
    moveItemInArray(this.employeeData, event.previousIndex, event.currentIndex);
  }
}
