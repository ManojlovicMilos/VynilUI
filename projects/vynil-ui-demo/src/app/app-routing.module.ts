import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { TextDemoScreenComponent } from './screens/basic/text-demo-screen/text-demo-screen.component';
import { IconDemoScreenComponent } from './screens/images/icon-demo-screen/icon-demo-screen.component';
import { CardDemoScreenComponent } from './screens/layout/card-demo-screen/card-demo-screen.component';
import { ViewDemoScreenComponent } from './screens/layout/view-demo-screen/view-demo-screen.component';
import { ImageDemoScreenComponent } from './screens/images/image-demo-screen/image-demo-screen.component';
import { InputDemoScreenComponent } from './screens/inputs/input-demo-screen/input-demo-screen.component';
import { ButtonDemoScreenComponent } from './screens/basic/button-demo-screen/button-demo-screen.component';
import { ColorInputDemoScreenComponent } from './screens/inputs/color-input-demo-screen/color-input-demo-screen.component';
import { ToggleInputDemoScreenComponent } from './screens/inputs/toggle-input-demo-screen/toggle-input-demo-screen.component';
import { SelectInputDemoScreenComponent } from './screens/inputs/select-input-demo-screen/select-input-demo-screen.component';

const routes: Routes = [
    {
        path: '',
        component: HomeScreenComponent,
    },
    {
        path: 'text',
        component: TextDemoScreenComponent,
    },
    {
        path: 'button',
        component: ButtonDemoScreenComponent,
    },
    {
        path: 'icon',
        component: IconDemoScreenComponent,
    },
    {
        path: 'image',
        component: ImageDemoScreenComponent,
    },
    {
        path: 'input',
        component: InputDemoScreenComponent,
    },
    {
        path: 'toggle-input',
        component: ToggleInputDemoScreenComponent,
    },
    {
        path: 'select-input',
        component: SelectInputDemoScreenComponent,
    },
    {
        path: 'color-input',
        component: ColorInputDemoScreenComponent,
    },
    {
        path: 'view',
        component: ViewDemoScreenComponent,
    },
    {
        path: 'card',
        component: CardDemoScreenComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
