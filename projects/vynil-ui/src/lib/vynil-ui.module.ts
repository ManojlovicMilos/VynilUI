import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextComponent } from './components/basic/text/text.component';
import { ButtonComponent } from './components/basic/button/button.component';
import { PageComponent } from './components/layout/page/page.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { ViewComponent } from './components/layout/view/view.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LinkComponent } from './components/navigation/link/link.component';
import { NavigationLinkComponent } from './components/navigation/navigation-link/navigation-link.component';
import { InputComponent } from './components/inputs/input/input.component';
import { CardComponent } from './components/layout/card/card.component';
import { IconComponent } from './components/images/icon/icon.component';
import { ImageComponent } from './components/images/image/image.component';
import { ToggleInputComponent } from './components/inputs/toggle-input/toggle-input.component';
import { ColorInputComponent } from './components/inputs/color-input/color-input.component';
import { ModalComponent } from './components/modals/modal/modal.component';
import { ColorSelectorComponent } from './components/selectors/color-selector/color-selector.component';
import { SelectInputComponent } from './components/inputs/select-input/select-input.component';

const Components = [
    // Basic
    ButtonComponent,
    TextComponent,
    // Images
    // IconComponent,
    ImageComponent,
    // ImageUploadComponent,
    IconComponent,
    ViewComponent,
    PageComponent,
    SidebarComponent,
    HeaderComponent,
    LinkComponent,
    NavigationLinkComponent,
    InputComponent,
    ToggleInputComponent,
    CardComponent,
    ModalComponent,
    ColorInputComponent,
    SelectInputComponent,
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
