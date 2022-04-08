import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/auth/login/login.component';
import { RegisterComponent } from './core/components/auth/register/register.component';

// ------------------------------------------------------------------------------------------ //
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
  },
  {
    path: 'directive-and-pipes',
    loadChildren: () => import('./directive-pipes/directive-pipes.module').then(m => m.DirectivePipesModule)
  },
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
  {
    path: 'mvp-practice',
    loadChildren: () => import('./mvp-practice/mvp-practice.module').then(m => m.MVPPracticeModule)
  },
  {
    path: 'file-upload',
    loadChildren: () => import('./file-upload/file-upload.module').then(m => m.FileUploadModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
