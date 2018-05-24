import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "./../components/components.module";

import { AppComponent } from './app.component';

import { DemoSideBarComponent } from "./side-bar/side-bar.component";
import { DemoContentPanelComponent } from "./content-panel/content-panel.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoSideBarComponent,
    DemoContentPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { AppComponent }
