import { Injectable, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Mentor } from 'src/app/shared/models/mentor.model';

@Injectable()
export class MentorFormPresenterService {

  private _mentorForm: Subject<Mentor>;
  private _mentorForm$: Observable<Mentor>;
  public get mentorForm$(): Observable<Mentor> {
    return this._mentorForm$;
  }

  constructor(private fb: FormBuilder) {
    this._mentorForm = new Subject();
    this._mentorForm$ = this._mentorForm.asObservable();
  }

  public createForm(): FormGroup {
    return this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      emailId: ['', Validators.pattern(/^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~][a-zA-Z0-9!#$%&'*+-/=?^_`{|}~.]*@[a-zA-Z]*.com$/)],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      gender: ['male'],
      dept: [0],
      designation: [0]
    });
  }

  public onSubmit(form: FormGroup) {
    if (!form.valid) {
      alert("Invalid form data!!!");
      return;
    } else {
      this._mentorForm.next(form.value);
    }
  }
}
