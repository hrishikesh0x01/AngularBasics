import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListPresenterService {

  private _delete: Subject<number>;
  private _delete$: Observable<number>;

  public get delete$(): Observable<number> {
    return this._delete$;
  }

  constructor() {
    this._delete = new Subject();
    this._delete$ = this._delete.asObservable();
  }

  public delete(id: number) {
    this._delete.next(id);
  }
}
