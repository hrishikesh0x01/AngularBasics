import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivePipesComponent } from './directive-pipes.component';
import { CustomDirectiveDirective } from './customDirective/custom-directive.directive';
import { PostsTableViewComponent } from './posts-table-view/posts-table-view.component';
import { HighlightOnHoverDirective } from './hightlight-on-hover/highlight-on-hover.directive';
import { FirstCapitalPipe } from './first-capital-pipe/first-capital.pipe';

@NgModule({
  declarations: [
    DirectivePipesComponent,
    CustomDirectiveDirective,
    PostsTableViewComponent,
    HighlightOnHoverDirective,
    FirstCapitalPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectivePipesComponent
  ]
})
export class DirectivePipesModule { }
