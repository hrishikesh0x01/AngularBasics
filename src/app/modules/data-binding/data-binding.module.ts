import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { DataBindingComponent } from './data-binding.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/parent/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    DataBindingRoutingModule,
    FormsModule
  ]
})
export class DataBindingModule { }
