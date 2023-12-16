import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VynilUIModule } from 'projects/vynil-ui/src/public-api';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { TextDemoScreenComponent } from './screens/basic/text-demo-screen/text-demo-screen.component';
import { ViewDemoScreenComponent } from './screens/layout/view-demo-screen/view-demo-screen.component';
import { IconDemoScreenComponent } from './screens/images/icon-demo-screen/icon-demo-screen.component';
import { CardDemoScreenComponent } from './screens/layout/card-demo-screen/card-demo-screen.component';
import { ModalDemoScreenComponent } from './screens/modal/modal-demo-screen/modal-demo-screen.component';
import { InputDemoScreenComponent } from './screens/inputs/input-demo-screen/input-demo-screen.component';
import { ImageDemoScreenComponent } from './screens/images/image-demo-screen/image-demo-screen.component';
import { ButtonDemoScreenComponent } from './screens/basic/button-demo-screen/button-demo-screen.component';
import { DialogDemoScreenComponent } from './screens/modal/dialog-demo-screen/dialog-demo-screen.component';
import { MessageDemoScreenComponent } from './screens/modal/message-demo-screen/message-demo-screen.component';
import { ColorInputDemoScreenComponent } from './screens/inputs/color-input-demo-screen/color-input-demo-screen.component';
import { ImageInputDemoScreenComponent } from './screens/inputs/image-input-demo-screen/image-input-demo-screen.component';
import { ToggleInputDemoScreenComponent } from './screens/inputs/toggle-input-demo-screen/toggle-input-demo-screen.component';
import { SelectInputDemoScreenComponent } from './screens/inputs/select-input-demo-screen/select-input-demo-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    TextDemoScreenComponent,
    ViewDemoScreenComponent,
    IconDemoScreenComponent,
    CardDemoScreenComponent,
    ImageDemoScreenComponent,
    InputDemoScreenComponent,
    ModalDemoScreenComponent,
    ButtonDemoScreenComponent,
    DialogDemoScreenComponent,
    MessageDemoScreenComponent,
    ColorInputDemoScreenComponent,
    ImageInputDemoScreenComponent,
    ToggleInputDemoScreenComponent,
    SelectInputDemoScreenComponent,
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
