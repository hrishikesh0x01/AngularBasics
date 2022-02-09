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

  constructor(private fb: FormBuilder, private resumeService: ResumeService, private router: Router) { }

  ngOnInit(): void {
    this.resumeForm = this.createResumeForm();
    this.addTechnicalField();
    this.addExperienceGroup();
    this.addEducationGroup();
    // console.log(this.resumeForm);
  }

  debug() {
    console.log(this.resumeForm);
  }

  createResumeForm(): FormGroup {
    return this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      designation: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      mobileNo: ["", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
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
      this.fb.control('', [Validators.required])
    );
  }

  removeTechnicalField(index: number) {
    this.getFormGroupArray('technical').removeAt(index);
  }

  addExperienceGroup() {
    this.getFormGroupArray('experience').push(
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
    this.getFormGroupArray('experience').removeAt(index);
  }

  addEducationGroup() {
    this.getFormGroupArray('education').push(
      this.fb.group({
        uniName: ["", [Validators.required]],
        degree: ["", [Validators.required]],
        grade: [1.0, [Validators.required]]
      })
    );
  }

  removeEducationGroup(index: number) {
    this.getFormGroupArray('education').removeAt(index);
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
