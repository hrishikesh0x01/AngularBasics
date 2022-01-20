import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() fromParent: string | undefined;
  //This EventEmitter is used emit event, on which the parent is listening and the data is passed to parent.
  @Output() fromChild: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  passValueToParent(value: string) {
    // the .emit() function emits the event that is listened to by parent.
    this.fromChild.emit(value);
  }
}
