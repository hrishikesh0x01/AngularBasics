import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { DirectivePipesComponent } from './modules/directive-pipes/directive-pipes.component';

const routes: Routes = [
  {
    path: 'data-binding',
    loadChildren: () => import('./modules/data-binding/data-binding.module').then(m => m.DataBindingModule)
  },
  { path: 'directive-and-pipes', component: DirectivePipesComponent },
  {
    path: 'reactive-form-basics',
    loadChildren: () => import('./modules/reactive-form-basics/reactive-form-basics.module').then(m => m.ReactiveFormBasicsModule)
  },
  {
    path: 'crud-without-server',
    loadChildren: () => import('./modules/crud-without-server/crud-without-server.module').then(m => m.CrudWithoutServerModule)
  },
  {
    path: 'crud-operation',
    loadChildren: () => import('./modules/crud-operation/crud-operation.module').then(m => m.CrudOperationModule)
  },
  {
    path: 'resume-builder',
    loadChildren: () => import('./modules/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
