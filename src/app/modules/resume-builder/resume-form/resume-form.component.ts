import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ResumeInfo } from '../models/resume-info.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  resumeForm: FormGroup;

  constructor(private fb: FormBuilder, private resumeService: ResumeService, private router: Router) { }

  ngOnInit(): void {
    this.resumeForm = this.createResumeForm();
    this.addTechnicalField();
    this.addExperienceGroup();
    this.addEducationGroup();
    // console.log(this.resumeForm);
  }

  createResumeForm(): FormGroup {
    return this.fb.group({
      name: ["string", []],
      designation: ["string", []],
      email: ["string", []],
      mobileNo: ["string", []],
      technical: this.fb.array([]),
      experience: this.fb.array([]),
      education: this.fb.array([])
    });
  }

  getFormGroupArray(formArrayName: string): FormArray {
    return this.resumeForm.controls[formArrayName] as FormArray;
  }

  getAsFormGroup(ab: AbstractControl): FormGroup {
    return ab as FormGroup;
  }

  addTechnicalField() {
    this.getFormGroupArray('technical').push(
      this.fb.control('', [])
    );
  }

  removeTechnicalField(index: number) {
    this.getFormGroupArray('technical').removeAt(index);
  }

  addExperienceGroup() {
    this.getFormGroupArray('experience').push(
      this.fb.group({
        companyName: ["string", []],
        jobRole: ["string", []],
        jobDescription: ["string", []],
        startYear: [2022, []],
        endYear: [2023, []]
      })
    )
  }

  addEducationGroup() {
    this.getFormGroupArray('education').push(
      this.fb.group({
        uniName: ["string", []],
        degree: ["string", []],
        grade: [1.0, []]
      })
    );
  }

  onReset(): void {
    this.resumeForm.reset();
  }

  onSubmit(): void {
    // let resume: ResumeInfo;
    // resume = ;
    this.resumeService.deleteResumeDetails(1).subscribe(id => {
      this.resumeService.saveResumeDetails(this.resumeForm.value).subscribe(data => {
        // console.log(data);
        this.router.navigate(['/resume-builder/view']);
      })
    })
  }
}
