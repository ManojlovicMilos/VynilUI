import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { MatTooltipModule } from '@angular/material/tooltip';

import { TogglerComponent } from "./panels/toggler/toggler.component";
import { TreeNodeComponent } from "./views/tree-node/tree-node.component";
import { SideModeSwitchComponent } from "./panels/side-mode-switch/side-mode-switch.component";

import { TextInputComponent } from "./inputs/text-input/text-input.component";
import { NumericInputComponent } from "./inputs/numeric-input/numeric-input.component";
import { CheckInputComponent } from "./inputs/check-input/check-input.component";
import { ButtonInputComponent } from "./inputs/button-input/button-input.component";

import { Numeric } from "./directives/numeric.directive";

@NgModule({
  declarations:
  [
    Numeric,
    TogglerComponent,
    TreeNodeComponent,
    SideModeSwitchComponent,
    TextInputComponent,
    NumericInputComponent,
    CheckInputComponent,
    ButtonInputComponent
  ],
  imports:
  [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule,
    MatTooltipModule
  ],
  exports:
  [
    Numeric,
    TogglerComponent,
    TreeNodeComponent,
    SideModeSwitchComponent,
    TextInputComponent,
    NumericInputComponent,
    CheckInputComponent,
    ButtonInputComponent
  ]
})
export class ComponentsModule { }
