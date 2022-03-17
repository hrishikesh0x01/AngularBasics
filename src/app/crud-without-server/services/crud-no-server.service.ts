import { Injectable } from '@angular/core';

/////////////////////////////////////////////////////////////////
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Details } from 'src/app/shared/models/details.model';

@Injectable({
  providedIn: 'root'
})
export class CrudNoServerService {

  genderOptions: string[] = [
    "Male",
    "Female"
  ];

  private _dataToEdit: Subject<Details>;
  private _dataToEdit$: Observable<Details>;
  public get dataToEdit$(): Observable<Details> {
    return this._dataToEdit$;
  }
  private _dataToSave: Subject<Details>;
  private _dataToSave$: Observable<Details>;
  public get dataToSave$(): Observable<Details> {
    return this._dataToSave$;
  }

  constructor() {
    this._dataToEdit = new Subject();
    this._dataToEdit$ = this._dataToEdit.asObservable();
    this._dataToSave = new Subject();
    this._dataToSave$ = this._dataToSave.asObservable();
  }

  getGenderOptions(): string[] {
    return this.genderOptions;
  }

  sendDataToEdit(data: Details) {
    this._dataToEdit.next(data);
  }
  
  sendDetailsToSave(data: Details) {
    this._dataToSave.next(data);
  }
}