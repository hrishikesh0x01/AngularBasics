import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Feature } from '../../models/feature.model';
import { navItems } from '../../nav-items';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Imported navbar entries from nav-items.ts file.
  features: Feature[][] = navItems;

  @Output() sidebarCloseEvent: EventEmitter<Event>;

  constructor() {
    this.sidebarCloseEvent = new EventEmitter();
  }

  ngOnInit(): void { }

  drop(event: CdkDragDrop<Feature[]>) {
    // moveItemInArray(this.features[index], event.previousIndex, event.currentIndex);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  sidebarClose() {
    this.sidebarCloseEvent.emit();
  }
}
