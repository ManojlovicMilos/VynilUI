import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VynilUIModule } from 'projects/vynil-ui/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    VynilUIModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
