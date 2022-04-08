import { Component, OnInit } from '@angular/core';

// ------------------------------------------------------------------------------------------ //
import { Details } from 'src/app/shared/models/details.model';
import { CrudNoServerService } from '../../services/crud-no-server.service';

@Component({
  selector: 'app-employee-list-view',
  templateUrl: './employee-list-view.component.html',
  styleUrls: ['./employee-list-view.component.scss']
})
export class EmployeeListViewComponent implements OnInit {

  details: Details[];
  searchString: string;
  genderOptions: string[];

  constructor(private crudNoServerService: CrudNoServerService) {
    this.searchString = "";
    this.genderOptions = new Array<string>();

    this.details = [
      new Details(
        1,
        "Hello, World!",
        23,
        1,
      )
    ];
  }

  ngOnInit(): void {
    this.genderOptions = this.crudNoServerService.getGenderOptions();

    this.crudNoServerService.dataToSave$.subscribe((data) => {
      if (data.id) {
        this.details[this.details.findIndex((detail: Details) => detail.id === data.id)] = data;
      } else {
        this.addNewDetail(data);
      }
    });
  }
  
  editDetail(data: Details): void {
    this.crudNoServerService.sendDataToEdit(data);
  }

  detailTrack(index: number, detail: Details) {
    return detail.id;
  }

  getDetailById(id: number): Details | undefined {
    return this.details.find((val) => id == val.id);
  }

  addNewDetail(newDetails: Details): void {
    if (this.details.length) {
      newDetails.id = this.details.slice(-1)[0].id + 1;
    } else {
      newDetails.id = 1;
    }
    console.log(this.details);
    this.details.push(newDetails);
  }

  updateDetail(id: number, data: Details): void {
    this.details[this.details.findIndex((val) => id == val.id)] = { ...data, id: id };
  }

  deleteDetail(id: number): Details[] {
    return this.details.splice(this.details.findIndex((val) => id == val.id), 1);
  }
}