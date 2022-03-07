import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Details } from '../models/details.model';
// import persons from './personDetails.json';

@Injectable({
  providedIn: 'root'
})
export class CrudNoServerService {

  apiLink: string;
  
  data: Details[] = [];
  
  genderOptions: string[] = [
    "Male",
    "Female"
  ];

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
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
    if(this.data.length) {
      newDetails.id = this.data.slice(-1)[0].id + 1;
    } else {
      newDetails.id = 1;
    }
    try {
      this.data.push(newDetails);
      return true;
    } catch(err) {
      return false;
    }
  }
  
  updateDetail(id: number, data: Details): boolean {
    try {
      this.data[this.data.findIndex((val) => id == val.id)] = {...this.getDetailById(id), ...data};
      return true;
    }
    catch(err) {
      console.log('Error: ', err);
      return false;
    }
  }

  deleteDetail(id: number): Details[] {
    return this.data.splice(this.data.findIndex((val) => id == val.id), 1);
  }
}