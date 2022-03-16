import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from 'src/app/shared/models/department.model';
import { Mentor } from 'src/app/shared/models/mentor.model';
import { MentorService } from '../services/mentor.service';

@Component({
  selector: 'app-mentor-list-container',
  templateUrl: './mentor-list-container.component.html',
  styleUrls: ['./mentor-list-container.component.scss']
})
export class MentorListContainerComponent implements OnInit {

  private _departmentOptions: Department[];
  public set departmentOptions(value: Department[]) {
    this._departmentOptions = value;
  }
  public get departmentOptions(): Department[] {
    return this._departmentOptions;
  }

  private _mentorData$: Observable<Mentor[]>;
  public get mentorData$(): Observable<Mentor[]> {
    return this._mentorData$;
  }

  constructor(private mentorService: MentorService, private router: Router) {
    this._departmentOptions = new Array<Department>();
    this._mentorData$ = new Observable();
  }

  ngOnInit(): void {
    this.getDepartmentData();
    this._mentorData$ = this.mentorService.getEmpList();
  }

  private getDepartmentData(): void {
    this.mentorService.getDeptData().subscribe(data => {
      this.departmentOptions = data;
    }, errors => {
      alert(errors);
    });
  }

  public delete(id: number): void {
    this.mentorService.deleteEmp(id).subscribe(res => {
      console.log("Deleted: ", id);
      this._mentorData$ = this.mentorService.getEmpList();
    });
  }
}
