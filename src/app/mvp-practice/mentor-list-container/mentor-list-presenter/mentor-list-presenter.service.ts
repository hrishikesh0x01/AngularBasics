import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorListPresenterService {

  private _delete: Subject<number>;
  private _delete$: Observable<number>;

  public get delete$(): Observable<number> {
    return this._delete$;
  }

  private _displayForm: Subject<number>;
  private _displayForm$: Observable<number>;

  public get displayForm$(): Observable<number> {
    return this._displayForm$;
  }

  constructor() {
    this._delete = new Subject();
    this._delete$ = this._delete.asObservable();

    this._displayForm = new Subject();
    this._displayForm$ = this._displayForm.asObservable();
  }

  public delete(id: number) {
    this._delete.next(id);
  }

  public displayForm(id?: number) {
    this._displayForm.next(id ?? -1);
  }
}
