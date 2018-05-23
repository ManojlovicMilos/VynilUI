import { Component, OnInit } from '@angular/core';
import { InputComponent } from "./../input/input.component";

@Component({
    selector: 'vinyl-button-input',
    templateUrl: './button-input.component.html',
    styleUrls: ['./button-input.component.scss']
})
export class ButtonInputComponent extends InputComponent
{
    public constructor()
    {
        super();
    }
}
