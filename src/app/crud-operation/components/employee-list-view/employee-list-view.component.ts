import { Component, ComponentRef, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';

import { Department } from '../../models/department.model';
import { Employee } from '../../models/employee.model';
import { CrudService } from '../../services/crud.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-employee-list-view',
  templateUrl: './employee-list-view.component.html',
  styleUrls: ['./employee-list-view.component.scss']
})
export class EmployeeListViewComponent implements OnInit {

  employeeData: Employee[];
  departmentOptions: Department[];
  searchString: string;

  formOverlayComponentRef: ComponentRef<EmployeeFormComponent>;
  formOverlayRef: OverlayRef;

  constructor(private crudService: CrudService, private overlay: Overlay) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getDepartmentData(): void {
    this.crudService.getDeptData().subscribe(data => {
      this.departmentOptions = data;
    }, errors => {
      alert("Something went wrong!!" + errors);
    });
  }

  getEmployeeData() {
    this.crudService.getEmpList().subscribe(data => {
      this.employeeData = data;
      this.getDepartmentData();
      console.log("emp-list-view onInit()");
      console.log(data);
    }, errors => {
      alert("Something went wrong!! - emp" + errors);
    });
  }

  editEmp(employee: Employee): void {
    this.crudService.sendEmployeeToEdit(employee);
    this.displayForm(employee.id);
  }

  deleteEmp(id: number) {
    this.crudService.deleteEmp(id).subscribe(data => {
      console.log("Deleted successfully: ", data);
      this.getEmployeeData();
    }, errors => {
      alert("Galat" + errors);
    });
  }

  empTrack(index: number, employee: Employee) {
    return employee.id;
  }

  confirmationPopupRef: OverlayRef;
  confirmationPopupComponentRef: ComponentRef<ConfirmationPopupComponent>;

  displayConfirmationPopup(id: number): void {
    let formOverlayConfig: OverlayConfig = {
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    };

    this.confirmationPopupRef = this.overlay.create(formOverlayConfig);

    const formComponent = new ComponentPortal(ConfirmationPopupComponent);

    this.confirmationPopupComponentRef = this.confirmationPopupRef.attach(formComponent);

    this.confirmationPopupComponentRef.instance.id = id;

    this.closeConfirmationPopup();
  }

  closeConfirmationPopup(): void {
    this.confirmationPopupComponentRef.instance.buttonClick.subscribe((val) => {
      if (val === 'delete') {
        this.deleteEmp(this.confirmationPopupComponentRef.instance.id);
      }
      this.confirmationPopupRef.detach();
    })
  }

  displayForm(id?: number): void {
    let formOverlayConfig: OverlayConfig = {
      positionStrategy: this.overlay.position().global().right().centerVertically()
    };

    this.formOverlayRef = this.overlay.create(formOverlayConfig);

    const formComponent = new ComponentPortal(EmployeeFormComponent);

    this.formOverlayComponentRef = this.formOverlayRef.attach(formComponent);

    this.formOverlayComponentRef.instance.currentEmpDataId = id;

    this.closeForm();
  }

  closeForm(): void {
    this.formOverlayComponentRef.instance.closeEvent.subscribe(() => {
      this.formOverlayRef.detach();
    })
  }
}