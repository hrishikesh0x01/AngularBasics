import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Details } from '../../models/details.model';
import { CrudNoServerService } from '../../services/crud-no-server.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  detailsForm: FormGroup;
  idToEdit: number;
  isEditMode: boolean = false;
  submitted: boolean = false;
  details: Details[];

  constructor(private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute, private crudNoServerService: CrudNoServerService) {}

  ngOnInit(): void {
    this.detailsForm = this.generateForm();
    this.idToEdit = this.activeRoute.snapshot.params['id'];
    if (this.idToEdit) {
      this.isEditMode = true;
      this.detailsForm.patchValue({...this.crudNoServerService.getDetailById(this.idToEdit)});
      console.log("EDIT MODE");
    }
  }
  
  generateForm(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
      gender: ['0']
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.detailsForm);
    if (this.detailsForm.status === 'VALID') {
      this.saveDetails();
    }
  }

  saveDetails() {
    let details: Details;
    if (this.isEditMode) {
      if (this.crudNoServerService.updateDetail(this.idToEdit, this.detailsForm.value)) {
        this.router.navigate(['/crud-without-server/emplist']);
      } else {
        alert('Error occured while saving...');
      }
    } else {
      if (this.crudNoServerService.addNewDetail(this.detailsForm.value)) {
        this.router.navigate(['/crud-without-server/emplist']);
      } else {
        alert('Error occured while saving...');
      }
    }
    console.log(this.detailsForm.value);
  }

  onReset() {
    this.detailsForm.reset();
    this.submitted = false;
  }

  getControl(cname: string): AbstractControl | null {
    return this.detailsForm.get(cname);
  }
}
