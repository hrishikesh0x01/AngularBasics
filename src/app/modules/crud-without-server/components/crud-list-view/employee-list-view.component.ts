import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from '../../models/details.model';

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

  constructor(private router: Router, private crudNoServerService: CrudNoServerService) { }

  ngOnInit(): void {
    this.details = this.crudNoServerService.getDetails();
    this.genderOptions = this.crudNoServerService.getGenderOptions();
  }

  editDetail(id: number): void {
    this.router.navigate([`/crud-without-server/edit/${id}`]);
  }

  deleteDetail(id: number) {
    this.crudNoServerService.deleteDetail(id);
  }

  detailTrack(index: number, detail: Details) {
    return detail.id;
  }
}
