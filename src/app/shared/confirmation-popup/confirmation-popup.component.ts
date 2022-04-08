import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// ------------------------------------------------------------------------------------------ //
import { Button } from '../models/button.model';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {
  @Input() msg!: string;
  @Input() buttons!: Button[];
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onButtonClick(name: string) {
    this.buttonClick.emit(name);
  }
}
