import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributesMaker } from './Demo-input/attributes-maker.directive';
import { DemoInputComponent } from './Demo-input/demo-input.component';
import { DemoFieldComponent } from './demo-field/demo-field.component';
import { DemoLabelComponent } from './demo-label/demo-label.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoInputComponent,
    AttributesMaker,
    DemoFieldComponent,
    DemoLabelComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
