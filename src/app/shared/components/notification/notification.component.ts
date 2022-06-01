import { animate, animateChild, group, query, state, style } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InvalidFile } from 'src/app/file-upload/models/FileData';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    // state('open', style({
    //   height: '200px',
    //   opacity: 1,
    //   backgroundColor: 'yellow'
    // })),
    // state('close', style({
    //   height: '200px',
    //   opacity: 1,
    //   backgroundColor: 'yellow'
    // })),
    query(':enter', [
      style({ left: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ]),
    ]), 
  ]
})
export class NotificationComponent implements OnInit {
  private _file!: InvalidFile;
  @Input() public set file(value: InvalidFile | null) {
    if (value) {
      this._file = value;
    }
  }

  public get file(): InvalidFile {
    return this._file;
  }

  @Output() remove: EventEmitter<number>;

  constructor() {
    this.remove = new EventEmitter();
  }

  ngOnInit(): void {
  }

  removeToast(id: number): void {
    this.remove.emit(id);
  }
}
