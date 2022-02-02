import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ----------------------------------------------------------------- //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivePipesModule } from './directive-pipes/directive-pipes.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    DirectivePipesModule,
    DataBindingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
