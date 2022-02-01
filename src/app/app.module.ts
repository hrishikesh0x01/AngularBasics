import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DirectivePipesModule } from './directive-pipes/directive-pipes.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DataBindingModule } from './data-binding/data-binding.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DirectivePipesModule,
    CoreModule,
    SharedModule,
    DataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
