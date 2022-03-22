import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

////////////////////////////////////////////////////////////////////
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    DragDropModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
