import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  resumeForm: FormGroup;
  technicalArray: FormArray = this.fb.array([]);
  experienceArray: FormArray = this.fb.array([]);
  educationArray: FormArray = this.fb.array([]);

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
      name: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      designation: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      mobileNo: ["", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      technical: this.technicalArray,
      experience: this.experienceArray,
      education: this.educationArray
    });
  }

  getAsFormGroup(ab: AbstractControl): FormGroup {
    return ab as FormGroup;
  }

  addTechnicalField() {
    this.technicalArray.push(
      this.fb.control('', [Validators.required])
    );
  }

  removeTechnicalField(index: number) {
    this.technicalArray.removeAt(index);
  }

  addExperienceGroup() {
    this.experienceArray.push(
      this.fb.group({
        companyName: ["", [Validators.required]],
        jobRole: ["", [Validators.required]],
        jobDescription: ["", [Validators.required]],
        startYear: [2022, [Validators.required, Validators.maxLength(4)]],
        endYear: [2023, [Validators.required, Validators.maxLength(4)]]
      })
    )
  }

  removeExperienceGroup(index: number) {
    this.experienceArray.removeAt(index);
  }

  addEducationGroup() {
    this.educationArray.push(
      this.fb.group({
        uniName: ["", [Validators.required]],
        degree: ["", [Validators.required]],
        grade: [1.0, [Validators.required]]
      })
    );
  }

  removeEducationGroup(index: number) {
    this.educationArray.removeAt(index);
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
