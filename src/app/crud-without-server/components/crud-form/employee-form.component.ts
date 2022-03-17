import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/////////////////////////////////////////////////////////////////////
import { Details } from 'src/app/shared/models/details.model';
import { CrudNoServerService } from '../../services/crud-no-server.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  detailsForm: FormGroup;
  detailsToEdit!: Details;
  isEditMode: boolean = false;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute, private crudNoServerService: CrudNoServerService) {
    this.detailsForm = this.generateForm();
  }

  ngOnInit(): void {
    this.crudNoServerService.dataToEdit$.subscribe((data) => {
      this.isEditMode = true;
      this.detailsToEdit = data;
      this.detailsForm.patchValue(this.detailsToEdit);
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
    console.log(this.detailsForm);
    if (this.detailsForm.status === 'VALID') {
      this.saveDetails();
    }
  }

  saveDetails() {
    if (this.isEditMode) {
      if (this.crudNoServerService.updateDetail(this.detailsToEdit.id, this.detailsForm.value)) {
        this.onReset();
        // this.router.navigate(['/crud-without-server/emplist']);
      } else {
        alert('Error occured while saving...');
      }
    } else {
      if (this.crudNoServerService.addNewDetail(this.detailsForm.value)) {
        this.onReset();
        // this.router.navigate(['/crud-without-server/emplist']);
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
