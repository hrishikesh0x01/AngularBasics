import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//////////////////////////////////////////////////////////////////////////////////////////////
import { CrudWithoutServerComponent } from './crud-without-server.component';

const routes: Routes = [
  {
    path: '', component: CrudWithoutServerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudWithoutServerRoutingModule { }
