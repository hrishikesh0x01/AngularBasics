import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from 'src/app/shared/models/department.model';
import { Designation } from 'src/app/shared/models/designation.model';
import { Mentor } from 'src/app/shared/models/mentor.model';
import { MentorService } from '../services/mentor.service';

@Component({
  selector: 'app-mentor-list-container',
  templateUrl: './mentor-list-container.component.html',
  styleUrls: ['./mentor-list-container.component.scss']
})
export class MentorListContainerComponent implements OnInit {

  // private _departmentOptions: Department[];
  // public set departmentOptions(value: Department[]) {
  //   this._departmentOptions = value;
  // }
  // public get departmentOptions(): Department[] {
  //   return this._departmentOptions;
  // }

  // private _designations: Department[];
  // public set designations(value: Department[]) {
  //   this._designations = value;
  // }
  // public get designations(): Department[] {
  //   return this._designations;
  // }

  private _designations$: Observable<Designation[]>;
  public get designations$(): Observable<Designation[]> {
    return this._designations$;
  }

  private _departmentOptions$: Observable<Department[]>;
  public get departmentOptions$(): Observable<Department[]> {
    return this._departmentOptions$;
  }

  private _mentorData$: Observable<Mentor[]>;
  public get mentorData$(): Observable<Mentor[]> {
    return this._mentorData$;
  }

  public genderOptions: string[];

  constructor(private mentorService: MentorService, private router: Router) {
    this._departmentOptions$ = new Observable();
    this._designations$ = new Observable();
    this._mentorData$ = new Observable();
    this.genderOptions = this.mentorService.getGenderOptions();
  }

  ngOnInit(): void {
    // this.getDepartmentData();
    // this.getDesignations();
    this._departmentOptions$ = this.mentorService.getDeptData();
    this._designations$ = this.mentorService.getDesignationsData();
    this._mentorData$ = this.mentorService.getEmpList();
  }

  // private getDepartmentData(): void {
  //   this.mentorService.getDeptData().subscribe(data => {
  //     this.departmentOptions = data;
  //   }, errors => {
  //     alert(errors);
  //   });
  // }

  // private getDesignations(): void {
  //   this.mentorService.getDesignationsData().subscribe(data => {
  //     this.designations = data;
  //   }, errors => {
  //     alert(errors);
  //   });
  // }

  public delete(id: number): void {
    this.mentorService.deleteEmp(id).subscribe(res => {
      console.log("Deleted: ", id);
      this._mentorData$ = this.mentorService.getEmpList();
    });
  }
}
