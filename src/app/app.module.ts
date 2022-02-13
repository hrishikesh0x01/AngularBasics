import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// ----------------------------------------------------------------- //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivePipesModule } from './modules/directive-pipes/directive-pipes.module';
import { DataBindingModule } from './modules/data-binding/data-binding.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DirectivePipesModule,
    DataBindingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
