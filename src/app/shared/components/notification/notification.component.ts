import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InvalidFile } from 'src/app/file-upload/models/FileData';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
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
