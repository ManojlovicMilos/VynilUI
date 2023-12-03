import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VynilUIModule } from 'projects/vynil-ui/src/public-api';
import { ButtonDemoScreenComponent } from './screens/basic/button-demo-screen/button-demo-screen.component';
import { TextDemoScreenComponent } from './screens/basic/text-demo-screen/text-demo-screen.component';
import { ViewDemoScreenComponent } from './screens/layout/view-demo-screen/view-demo-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { InputDemoScreenComponent } from './screens/inputs/input-demo-screen/input-demo-screen.component';
import { IconDemoScreenComponent } from './screens/images/icon-demo-screen/icon-demo-screen.component';
import { ImageDemoScreenComponent } from './screens/images/image-demo-screen/image-demo-screen.component';
import { CardDemoScreenComponent } from './screens/layout/card-demo-screen/card-demo-screen.component';
import { ToggleInputDemoScreenComponent } from './screens/inputs/toggle-input-demo-screen/toggle-input-demo-screen.component';
import { ColorInputDemoScreenComponent } from './screens/inputs/color-input-demo-screen/color-input-demo-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDemoScreenComponent,
    TextDemoScreenComponent,
    ViewDemoScreenComponent,
    HomeScreenComponent,
    InputDemoScreenComponent,
    IconDemoScreenComponent,
    ImageDemoScreenComponent,
    CardDemoScreenComponent,
    ToggleInputDemoScreenComponent,
    ColorInputDemoScreenComponent
  ],
  imports: [
    VynilUIModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
