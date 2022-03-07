import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateRefExampleComponent } from './template-ref-example.component';

const routes: Routes = [
    {
        path: '', component: TemplateRefExampleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TemplateRefExampleRoutingModule { }
