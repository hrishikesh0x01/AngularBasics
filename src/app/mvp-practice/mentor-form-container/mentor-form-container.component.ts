import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Department } from 'src/app/shared/models/department.model';
import { Mentor } from 'src/app/shared/models/mentor.model';
import { MentorService } from '../services/mentor.service';

@Component({
  selector: 'app-mentor-form-container',
  templateUrl: './mentor-form-container.component.html',
  styleUrls: ['./mentor-form-container.component.scss']
})
export class MentorFormContainerComponent implements OnInit {

  private _departmentOptions$: Observable<Department[]>;
  public get departmentOptions$() {
    return this._departmentOptions$;
  }

  private _empData$: Observable<Mentor>;
  public get empData$(): Observable<Mentor> {
    return this._empData$;
  }

  private _idToEdit: number | null;

  constructor(private mentorService: MentorService, private activatedRoute: ActivatedRoute, private router: Router) {
    this._departmentOptions$ = this.mentorService.getDeptData();
    this._empData$ = new Observable();
    this._idToEdit = null;
  }

  ngOnInit(): void {
    this._idToEdit = this.activatedRoute.snapshot.params['id'];
    if (this._idToEdit) {
      this._empData$ = this.mentorService.getMentorById(this._idToEdit);
    }
  }

  public saveData(newData: Mentor) {
    if (this._idToEdit) {
      this.mentorService.editEmp(newData, this._idToEdit).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/mvp-practice/list');
      });
    } else {
      this.mentorService.addEmp(newData).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/mvp-practice/list');
      });
    }
  }
}
