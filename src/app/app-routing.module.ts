import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { DirectivePipesComponent } from './directive-pipes/directive-pipes.component';

const routes: Routes = [
  {
    path: 'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
  },
  { path: 'directive-and-pipes', component: DirectivePipesComponent },
  {
    path: 'reactive-form-basics',
    loadChildren: () => import('./reactive-form-basics/reactive-form-basics.module').then(m => m.ReactiveFormBasicsModule)
  },
  {
    path: 'crud-without-server',
    loadChildren: () => import('./crud-without-server/crud-without-server.module').then(m => m.CrudWithoutServerModule)
  },
  {
    path: 'crud-operation',
    loadChildren: () => import('./crud-operation/crud-operation.module').then(m => m.CrudOperationModule)
  },
  {
    path: 'resume-builder',
    loadChildren: () => import('./resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule)
  },
  {
    path: 'template-ref',
    loadChildren: () => import('./template-ref-example/template-ref-example.module').then(m => m.TemplateRefExampleModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
