import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Feature } from '../models/feature.model';
import { navItems } from '../nav-items';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Imported navbar entries from nav-items.ts file.
  features: Feature[][] = navItems;

  constructor() { }

  ngOnInit(): void { }

  drop(event: CdkDragDrop<Feature>, index: number) {
      moveItemInArray(this.features[index], event.previousIndex, event.currentIndex);
  }
}
