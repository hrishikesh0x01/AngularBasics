import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ResumeInfo } from '../../models/resume-info.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {

  resumeInfo: ResumeInfo;

  constructor(private resumeService: ResumeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Gets the id from the route parameter and passes it to getResumeInfo function.
    this.getResumeInfo(this.activatedRoute.snapshot.params['id']);
  }

  // Fetches the Resume with corresponding id from the database.
  getResumeInfo(id: number): void {
    this.resumeService.getResumeDetails(id).subscribe(data => {
      this.resumeInfo = data;
    });
  }
}
