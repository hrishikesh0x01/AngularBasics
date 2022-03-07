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
  
  public resumeForm: FormGroup;
  // Just keep track if the form has been submitted or not.
  public submitted: boolean = false;
  // The current year. Used to set limit for the year input fields in the form.
  public maxYear: number = new Date().getFullYear();

  // Stores the FormArrays used in the form so that accessing them is easier.
  public technicalArray: FormArray = this.fb.array([]);
  public experienceArray: FormArray = this.fb.array([]);
  public educationArray: FormArray = this.fb.array([]);

  constructor(private fb: FormBuilder, private resumeService: ResumeService, private router: Router) { }

  public ngOnInit(): void {
    // Builds the main form group.
    this.resumeForm = this.createResumeForm();
    
    // Adds the first field in the array. These cannot be deleted.
    this.addTechnicalField();
    this.addExperienceGroup();
    this.addEducationGroup();
  }

  // Function that creates and returns the main form group.
  private createResumeForm(): FormGroup {
    return this.fb.group({
      name: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      designation: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      mobileNo: [null, [Validators.required, Validators.pattern(/\([0-9]{3}\)\-[0-9]{3}\-[0-9]{4}$/)]],
      technical: this.technicalArray,
      experience: this.experienceArray,
      education: this.educationArray
    });
  }

  // Function that creates and pushes a new technical field into the corresponding array (FormControl used as only one field).
  public addTechnicalField() {
    this.technicalArray.push(
      this.fb.control('', [Validators.required])
    );
  }

  // Removes the technical field from array with passed index.
  public removeTechnicalField(index: number) {
    if (this.technicalArray.length != 1) this.technicalArray.removeAt(index);
  }

  // Function that creates and pushes new Experience Fields into the corresponding array (FormGroup used as more than one field).
  public addExperienceGroup() {
    this.experienceArray.push(
      this.fb.group({
        companyName: [null, [Validators.required]],
        jobRole: [null, [Validators.required]],
        jobDescription: [null, [Validators.required]],
        startYear: [null, [Validators.required, Validators.min(1000), Validators.max(this.maxYear)]],
        endYear: [null, [Validators.required, Validators.min(1000), Validators.max(this.maxYear)]]
      })
    )
  }

  // Removes the experience group from array with passed index.
  public removeExperienceGroup(index: number) {
    if (this.experienceArray.length - 1) this.experienceArray.removeAt(index);
  }

  // Function that creates and pushes new Education Fields into the corresponding array (FormGroup used as more than one field).
   public addEducationGroup() {
    this.educationArray.push(
      this.fb.group({
        uniName: [null, [Validators.required]],
        degree: [null, [Validators.required]],
        grade: [null, [Validators.required]]
      })
      );
  }
  
  // Removes the education group from array with passed index.
  public removeEducationGroup(index: number) {
    if (this.educationArray.length - 1) this.educationArray.removeAt(index);
  }

  // Takes in a FormGroup which is stored as AbstractControl and return it as FormGroup.
  private getAsFormGroup(ab: AbstractControl): FormGroup {
    return ab as FormGroup;
  }

  // Takes the name of the control and an optional FormGroup (but as AbstractControl) if the control name is inside the FormGroup.
  // The optional argument is used when the FormGroup belongs to FormArray which on iterating is an AbstractControl and not FormGroup.
  public getControl(cname: string, arrGroup?: AbstractControl): FormGroup {
    if (!arrGroup) return this.resumeForm.get(cname) as FormGroup;
    else return this.getAsFormGroup(arrGroup).controls[cname] as FormGroup;
  }

  // Clears all the input fields of the form.
  public onReset(): void {
    this.resumeForm.reset();
    this.submitted = false;
  }

  // Called on submission of the form.
  public onSubmit(): void {
    // checks if the form is valid.
    // if it is valid than stores the data into the database using the service.
    if (this.resumeForm.status === "VALID") {
      this.resumeService.saveResumeDetails(this.resumeForm.value).subscribe(data => {
        this.router.navigate(['/resume-builder/list']);
      });
    }
    // else mark that the form is submitted so the validation errors are displayed.
    else {
      this.submitted = true;
      // console.log("INVALID")
      console.log(this.resumeForm);
    }
  }
}
