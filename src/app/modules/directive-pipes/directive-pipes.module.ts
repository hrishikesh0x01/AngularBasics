import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivePipesComponent } from './directive-pipes.component';
import { CustomDirectiveDirective } from './directives/customDirective/custom-directive.directive';
import { PostsTableViewComponent } from './posts-table-view/posts-table-view.component';
import { HighlightOnHoverDirective } from './directives/hightlight-on-hover/highlight-on-hover.directive';
import { FirstCapitalPipe } from './pipes/first-capital-pipe/first-capital.pipe';

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
    DirectivePipesComponent,
    CustomDirectiveDirective
  ]
})
export class DirectivePipesModule { }
