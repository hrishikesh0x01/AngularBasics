import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// ------------------------------------------------------------------------------------------ //
import { Details } from 'src/app/shared/models/details.model';
import { CrudNoServerService } from '../../services/crud-no-server.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  detailsForm: FormGroup;
  oldDetails!: Details;
  isEditMode: boolean = false;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute, private crudNoServerService: CrudNoServerService) {
    this.detailsForm = this.generateForm();
  }

  ngOnInit(): void {
    this.crudNoServerService.dataToEdit$.subscribe((data) => {
      this.isEditMode = true;
      this.oldDetails = data;
      this.detailsForm.patchValue(this.oldDetails);
      console.log("EDIT MODE");
    });
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
    if (this.detailsForm.status === 'VALID') {
      console.log(this.detailsForm);
      this.saveDetails();
    }
  }

  saveDetails() {
    let data = this.detailsForm.value;
    if (this.isEditMode) {
      data.id = this.oldDetails.id;
    }
    this.crudNoServerService.sendDetailsToSave(data);
    this.onReset();
    this.isEditMode = false;
  }

  onReset() {
    this.detailsForm.reset();
    this.submitted = false;
  }

  getControl(cname: string): AbstractControl | null {
    return this.detailsForm.get(cname);
  }
}
