import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { InputComponent } from "./../input/input.component";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const COLOR_INPUT_ACCESSOR: any =
{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ColorInputComponent),
    multi: true
};

@Component({
    selector: 'vynil-color-input',
    templateUrl: './color-input.component.html',
    styleUrls: ['./color-input.component.scss'],
    providers: [COLOR_INPUT_ACCESSOR]
})
export class ColorInputComponent extends InputComponent implements OnInit
{
    ngOnInit()
    {
        super.ngOnInit();
    }
}