import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeInfo } from '../../models/resume-info.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss']
})
export class ResumeListComponent implements OnInit {

  // Stores list of resumes.
  public resumeList: ResumeInfo[];

  constructor(private resumeService: ResumeService, private router: Router) { }

  public ngOnInit(): void {
    // call to the function for fetching resume list.    
    this.fetchResumeList();
  }

  // fetches the list of resume from the database by callingthe corresponding service.
  private fetchResumeList(): void {
    this.resumeService.getResumeList().subscribe(data => {
      this.resumeList = data;
    });
  }

  public addResume(): void {
    this.router.navigate(['/resume-builder/form']);
  }

  public deleteResume(id: number): void {
    this.resumeService.deleteResumeDetails(id).subscribe(data => {
      console.log("Deleted resume with id: ", data);
      this.fetchResumeList();
    })
  }
}
