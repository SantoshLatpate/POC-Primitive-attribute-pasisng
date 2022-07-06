import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoInputComponent } from './demo-input/demo-input.component';
import {FormsModule} from '@angular/forms';
import { AttributesMaker } from './demo-input/attributes-maker.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoInputComponent,
    AttributesMaker
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
