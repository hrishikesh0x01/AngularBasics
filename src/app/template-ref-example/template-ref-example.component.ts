import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Student } from './Student.model';

@Component({
  selector: 'app-template-ref-example',
  templateUrl: './template-ref-example.component.html',
  styleUrls: ['./template-ref-example.component.scss']
})
export class TemplateRefExampleComponent implements OnInit {

  students: Student[] = [
    {
      id: 1,
      name: "dhj",
      grade: 'A'
    },
    {
      id: 1,
      name: "sdf",
      grade: 'B'
    },
    {
      id: 1,
      name: "dtgdsf",
      grade: 'D'
    },
    {
      id: 1,
      name: "dfjhj",
      grade: 'A+'
    },
  ];

  @ViewChild('listView', {static: true}) list_view!: TemplateRef<Template>;
  @ViewChild('cardView', {static: true}) card_view!: TemplateRef<Template>;

  viewMode!: TemplateRef<Template>;
  view_mode: string;

  constructor() {
    this.view_mode = "";
  }

  ngOnInit(): void {
    this.viewMode = this.list_view;
    this.view_mode = 'Show Card View';
  }

  toggleView(): void {
    if (this.view_mode === 'Show Card View') {
      this.view_mode = 'Show List View';
      this.viewMode = this.card_view;
    } else {
      this.view_mode = 'Show Card View';
      this.viewMode = this.list_view;
    }
  }
}
