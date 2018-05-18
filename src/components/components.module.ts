import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { MatTooltipModule } from '@angular/material/tooltip';

import { TogglerComponent } from "./toggler/toggler.component";
import { TreeNodeComponent } from "./tree-node/tree-node.component";
import { SideModeSwitchComponent } from "./side-mode-switch/side-mode-switch.component";

@NgModule({
  declarations:
  [
    TogglerComponent,
    TreeNodeComponent,
    SideModeSwitchComponent
  ],
  imports:
  [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFontAwesomeModule,
    MatTooltipModule
  ],
  exports:
  [
    TogglerComponent,
    TreeNodeComponent,
    SideModeSwitchComponent
  ]
})
export class ComponentsModule { }
