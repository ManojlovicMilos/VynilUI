import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextComponent } from './components/basic/text/text.component';
import { PageComponent } from './components/layout/page/page.component';
import { ViewComponent } from './components/layout/view/view.component';
import { CardComponent } from './components/layout/card/card.component';
import { IconComponent } from './components/images/icon/icon.component';
import { InputComponent } from './components/inputs/input/input.component';
import { ImageComponent } from './components/images/image/image.component';
import { ModalComponent } from './components/modals/modal/modal.component';
import { LinkComponent } from './components/navigation/link/link.component';
import { ButtonComponent } from './components/basic/button/button.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { IconInputComponent } from './components/inputs/icon-input/icon-input.component';
import { ColorInputComponent } from './components/inputs/color-input/color-input.component';
import { ToggleInputComponent } from './components/inputs/toggle-input/toggle-input.component';
import { SelectInputComponent } from './components/inputs/select-input/select-input.component';
import { ImageURLInputComponent } from './components/inputs/image-url-input/image-url-input.component';
import { ColorSelectorComponent } from './components/selectors/color-selector/color-selector.component';
import { NavigationLinkComponent } from './components/navigation/navigation-link/navigation-link.component';
import { ImageArrayInputComponent } from './components/inputs/image-array-input/image-array-input.component';
import { NavigationGroupComponent } from './components/navigation/navigation-group/navigation-group.component';
import { MessageComponent } from './components/modals/message/message.component';
import { DialogComponent } from './components/modals/dialog/dialog.component';

const Components = [
    // Basic
    ButtonComponent,
    TextComponent,
    // Images
    ImageComponent,
    IconComponent,
    // Forms
    InputComponent,
    IconInputComponent,
    ColorInputComponent,
    SelectInputComponent,
    ToggleInputComponent,
    ImageURLInputComponent,
    ImageArrayInputComponent,
    // Layout
    ViewComponent,
    CardComponent,
    PageComponent,
    HeaderComponent,
    SidebarComponent,
    // Modals
    ModalComponent,
    MessageComponent,
    DialogComponent,
    // Navigation
    LinkComponent,
    NavigationLinkComponent,
    NavigationGroupComponent,
    // Selectors
    ColorSelectorComponent,
];

@NgModule({
    declarations: [
        ...Components,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
    exports: [
        ...Components,
    ]
})
export class VynilUIModule { }
