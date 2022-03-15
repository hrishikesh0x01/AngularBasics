import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

//////////////////////////////////////////////////////////////////////
import { Department } from 'src/app/shared/models/department.model';
import { EmployeeFormPresenterService } from '../employee-form-presenter/employee-form-presenter.service';

@Component({
  viewProviders: [EmployeeFormPresenterService],
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.component.html',
  styleUrls: ['./employee-form-presentation.component.scss']
})
export class EmployeeFormPresentationComponent implements OnInit {

  public empForm: FormGroup;
  public submitted: boolean;

  private _departmentOptions: Department[];

  @Input() public set departmentOptions(val: Department[]) {
    if (val) {
      this._departmentOptions = val;
    }
  };

  public get departmentOptions(): Department[] {
    return this._departmentOptions;
  }

  constructor(private presenter: EmployeeFormPresenterService) { }

  ngOnInit(): void {
    this.empForm = this.presenter.createForm();
  }

  onSubmit() { }

  onClose() { }

  onReset() { }

  getControl(cname: string): AbstractControl | null {
    return this.empForm.get(cname);
  }
}
