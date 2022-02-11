import { Component, OnInit } from '@angular/core';

import { ResumeInfo } from '../../models/resume-info.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {

  resumeInfo: ResumeInfo;

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.getResumeInfo();
  }

  getResumeInfo(): void {
    this.resumeService.getResumeDetails(1).subscribe(data => {
      this.resumeInfo = data;
      // console.log(data);
    });
  }
}
