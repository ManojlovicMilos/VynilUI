import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsModule } from "./../components/components.module";

import { AppComponent } from './app.component';

import { DemoSideBarComponent } from "./side-bar/side-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoSideBarComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { AppComponent }
