import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  resumeForm: FormGroup;
  submitted: boolean = false;
  maxYear: number = new Date().getFullYear();
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
      name: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      designation: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      mobileNo: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      technical: this.technicalArray,
      experience: this.experienceArray,
      education: this.educationArray
    });
  }

  
  addTechnicalField() {
    this.technicalArray.push(
      this.fb.control('', [Validators.required])
    );
  }

  removeTechnicalField(index: number) {
    if (this.technicalArray.length - 1) this.technicalArray.removeAt(index);
  }

  addExperienceGroup() {
    this.experienceArray.push(
      this.fb.group({
        companyName: [null, [Validators.required]],
        jobRole: [null, [Validators.required]],
        jobDescription: [null, [Validators.required]],
        startYear: [null, [Validators.required, Validators.min(1000), Validators.max(this.maxYear)]],
        endYear: [null, [Validators.required, Validators.maxLength(4)]]
      })
    )
  }

  removeExperienceGroup(index: number) {
    if (this.experienceArray.length - 1) this.experienceArray.removeAt(index);
  }

  addEducationGroup() {
    this.educationArray.push(
      this.fb.group({
        uniName: [null, [Validators.required]],
        degree: [null, [Validators.required]],
        grade: [null, [Validators.required]]
      })
      );
  }
  
  removeEducationGroup(index: number) {
    if (this.educationArray.length - 1) this.educationArray.removeAt(index);
  }

  getAsFormGroup(ab: AbstractControl): FormGroup {
    return ab as FormGroup;
  }

  getControl(cname: string, arrGroup?: AbstractControl): FormGroup {
    if (!arrGroup) return this.resumeForm.get(cname) as FormGroup;
    else return this.getAsFormGroup(arrGroup).controls[cname] as FormGroup;
  }

  onReset(): void {
    this.resumeForm.reset();
    this.submitted = false;
  }

  onSubmit(): void {
    if (this.resumeForm.status === "VALID") {
      this.resumeService.deleteResumeDetails(1).subscribe(id => {
        this.resumeService.saveResumeDetails(this.resumeForm.value).subscribe(data => {
          // console.log(data);
          this.router.navigate(['/resume-builder/view']);
        })
      });
    } else {
      this.submitted = true;
      console.log(this.resumeForm);
      console.log("INVALID")
    }
  }
}
