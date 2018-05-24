import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio'

import { TogglerComponent } from "./panels/toggler/toggler.component";
import { TreeNodeComponent } from "./views/tree-node/tree-node.component";
import { SideModeSwitchComponent } from "./panels/side-mode-switch/side-mode-switch.component";
import { TabComponent } from "./panels/tab-controller/tab/tab.component";
import { TabControllerComponent } from "./panels/tab-controller/tab-controller.component";

import { TextInputComponent } from "./inputs/text-input/text-input.component";
import { NumericInputComponent } from "./inputs/numeric-input/numeric-input.component";
import { PasswordInputComponent } from "./inputs/password-input/password-input.component";
import { CheckInputComponent } from "./inputs/check-input/check-input.component";
import { ToggleInputComponent } from "./inputs/toggle-input/toggle-input.component";
import { RadioInputComponent } from "./inputs/radio-input/radio-input.component";
import { SelectInputComponent } from "./inputs/select-input/select-input.component";
import { ButtonInputComponent } from "./inputs/button-input/button-input.component";
import { DateInputComponent } from "./inputs/date-input/date-input.component";
import { TimeInputComponent } from "./inputs/time-input/time-input.component";
import { ColorInputComponent } from "./inputs/color-input/color-input.component";
import { VectorInputComponent } from "./inputs/vector-input/vector-input.component";

import { Numeric } from "./directives/numeric.directive";

@NgModule({
  declarations:
  [
    Numeric,
    TogglerComponent,
    TreeNodeComponent,
    SideModeSwitchComponent,
    TabComponent,
    TabControllerComponent,
    TextInputComponent,
    NumericInputComponent,
    PasswordInputComponent,
    CheckInputComponent,
    ToggleInputComponent,
    RadioInputComponent,
    SelectInputComponent,
    ButtonInputComponent,
    DateInputComponent,
    TimeInputComponent,
    ColorInputComponent,
    VectorInputComponent
  ],
  imports:
  [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports:
  [
    Numeric,
    TogglerComponent,
    TreeNodeComponent,
    SideModeSwitchComponent,
    TabControllerComponent,
    TextInputComponent,
    NumericInputComponent,
    PasswordInputComponent,
    CheckInputComponent,
    ToggleInputComponent,
    RadioInputComponent,
    SelectInputComponent,
    ButtonInputComponent,
    DateInputComponent,
    TimeInputComponent,
    ColorInputComponent,
    VectorInputComponent
  ]
})
export class ComponentsModule { }
