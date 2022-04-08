import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// ------------------------------------------------------------------------------------------ //
import { Department } from 'src/app/shared/models/department.model';
import { Designation } from 'src/app/shared/models/designation.model';
import { Mentor } from 'src/app/shared/models/mentor.model';
import { MentorFormPresenterService } from '../mentor-form-presenter/mentor-form-presenter.service';

@Component({
  viewProviders: [MentorFormPresenterService],
  selector: 'app-mentor-form-presentation',
  templateUrl: './mentor-form-presentation.component.html',
  styleUrls: ['./mentor-form-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorFormPresentationComponent implements OnInit {

  public empForm!: FormGroup;
  public submitted: boolean;
  public formTitle: string = "Add Mentor";

  @Output() edit: EventEmitter<Mentor>;
  @Output() add: EventEmitter<Mentor>;

  private _departmentOptions: Department[];
  @Input() public set departmentOptions(val: Department[] | null) {
    console.log(val);
    if (val) {
      console.log(val);
      this._departmentOptions = val;
    }
  };

  public get departmentOptions(): Department[] {
    return this._departmentOptions;
  }

  private _designations: Designation[];
  @Input() public set designations(val: Designation[] | null) {
    console.log(val);
    if (val) {
      console.log(val);
      this._designations = val;
    }
  };

  public get designations(): Designation[] {
    return this._designations;
  }

  @Input() public set empData(val: Mentor | null) {
    if (val) {
      this.formTitle = "Edit Mentor Details"
      this.empForm.patchValue(val);
    }
  }

  constructor(private mentorFormPresenter: MentorFormPresenterService, private router: Router) {
    this.submitted = false;
    
    this._departmentOptions = new Array<Department>();
    this._designations = new Array<Designation>();

    this.edit = new EventEmitter();
    this.add = new EventEmitter();
  }

  ngOnInit(): void {
    this.mentorFormPresenter.mentorForm$.subscribe((newData) => {
      if (this.formTitle === "Add Mentor") {
        this.add.emit(newData);
      } else {
        this.edit.emit(newData);
      }
    });
    this.empForm = this.mentorFormPresenter.createForm();
  }

  onFormSubmit() {
    this.mentorFormPresenter.onSubmit(this.empForm);
  }

  onCancel() {
    this.router.navigateByUrl('/mvp-practice/list');
  }

  onReset() {
    this.empForm.reset();
  }

  getControl(cname: string): AbstractControl | null {
    return this.empForm.get(cname);
  }
}
