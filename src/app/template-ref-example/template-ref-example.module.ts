import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRefExampleComponent } from './template-ref-example.component';
import { TemplateRefExampleRoutingModule } from './template-ref-example-routing.module';



@NgModule({
  declarations: [
    TemplateRefExampleComponent
  ],
  imports: [
    CommonModule,
    TemplateRefExampleRoutingModule
  ]
})
export class TemplateRefExampleModule { }
