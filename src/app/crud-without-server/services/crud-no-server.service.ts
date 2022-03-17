import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

/////////////////////////////////////////////////////////////////
import { Details } from 'src/app/shared/models/details.model';
import { environment } from 'src/environments/environment';
// import persons from './personDetails.json';

@Injectable({
  providedIn: 'root'
})
export class CrudNoServerService {

  apiLink: string;

  data: Details[];

  genderOptions: string[] = [
    "Male",
    "Female"
  ];

  private _dataToEdit: Subject<Details>;
  private _dataToEdit$: Observable<Details>;
  public get dataToEdit$(): Observable<Details> {
    return this._dataToEdit$;
  }

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
    this.data = new Array<Details>();

    this._dataToEdit = new Subject();
    this._dataToEdit$ = this._dataToEdit.asObservable();
  }

  getGenderOptions(): string[] {
    return this.genderOptions;
  }

  getDetails(): Details[] {
    return this.data;
  }

  getDetailById(id: number): Details | undefined {
    return this.data.find((val) => id == val.id);
  }

  addNewDetail(newDetails: Details): boolean {
    if (this.data.length) {
      newDetails.id = this.data.slice(-1)[0].id + 1;
    } else {
      newDetails.id = 1;
    }
    try {
      this.data.push(newDetails);
      return true;
    }
    catch (err) {
      console.log('Error: ', err);
      return false;
    }
  }

  sendDataToEdit(data: Details) {
    this._dataToEdit.next(data);
  }

  // getDataToEdit(data: Details): Observable< {
  //   return this.dataToEdit$;
  // }

  updateDetail(id: number, data: Details): boolean {
    try {
      this.data[this.data.findIndex((val) => id == val.id)] = { ...this.getDetailById(id), ...data };
      return true;
    }
    catch (err) {
      console.log('Error: ', err);
      return false;
    }
  }

  deleteDetail(id: number): Details[] {
    return this.data.splice(this.data.findIndex((val) => id == val.id), 1);
  }
}