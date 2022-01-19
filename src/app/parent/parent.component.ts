import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  valueFromChild?: string;
  toChild?: string;

  constructor() { }

  ngOnInit(): void { }

  getValueFromChild(val: string) {
    this.valueFromChild = val;
  }

  passValueToChild(val: string) {
    this.toChild = val;
  }
}
