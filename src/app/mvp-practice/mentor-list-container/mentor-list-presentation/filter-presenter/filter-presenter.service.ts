import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { FilterForm } from 'src/app/mvp-practice/models/filter-form.model';
import { Department } from 'src/app/shared/models/department.model';
import { Designation } from 'src/app/shared/models/designation.model';

@Injectable()
export class FilterPresenterService {
  // filterFormData: FilterForm;

  private _filterForm: Subject<FilterForm>;
  private _filterForm$: Observable<FilterForm>;
  public get filterForm$(): Observable<FilterForm> {
    return this._filterForm$;
  }

  constructor(private fb: FormBuilder) {
    this._filterForm = new Subject();
    this._filterForm$ = this._filterForm.asObservable();
  }

  generateFilterForm(appliedFilters: FilterForm | null): FormGroup {
    let form = this.fb.group({
      designations: [null],
      departments: [null],
      gender: [3],
      searchBy: this.fb.group({
        name: [''],
        email: [''],
        mobile: ['']
      })
    });

    if (appliedFilters) {
      form.patchValue(appliedFilters);
    }
    console.log(form);

    return form;
  }

  onSubmit(filterData: FilterForm): void {
    this._filterForm.next(filterData);
  }
}
