import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivePipesComponent } from './directive-pipes.component';
import { CustomDirectiveDirective } from './customDirective/custom-directive.directive';
import { PostViewComponent } from './post-view/post-view.component';



@NgModule({
  declarations: [
    DirectivePipesComponent,
    CustomDirectiveDirective,
    PostViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectivePipesComponent
  ]
})
export class DirectivePipesModule { }
