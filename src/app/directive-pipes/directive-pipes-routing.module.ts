import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ------------------------------------------------------------------------------------------ //
import { DirectivePipesComponent } from './directive-pipes.component';

const routes: Routes = [
  {
    path: '', component: DirectivePipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivePipesRoutingModule { }
