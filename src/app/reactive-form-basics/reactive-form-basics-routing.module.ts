import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormBasicsComponent } from './reactive-form-basics.component';

const routes: Routes = [
  {
    path: '', component: ReactiveFormBasicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormBasicsRoutingModule { }
