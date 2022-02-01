import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivePipesComponent } from './directive-pipes/directive-pipes.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directive-and-pipes', component: DirectivePipesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
