import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  valueFromChild?: string;
  toChild?: string;
  isVisible: boolean = false;
  val_ngModel?:string;

  constructor() { }

  ngOnInit(): void { }

  // called for recieving value from child
  getValueFromChild(val: string) {
    this.valueFromChild = val;
  }

  // called when there is change in the value to that is to be passed to child
  passValueToChild(val: string) {
    this.toChild = val;
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
