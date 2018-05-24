import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { InputComponent } from "./../input/input.component";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const TOGGLE_INPUT_ACCESSOR: any =
{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleInputComponent),
    multi: true
};

@Component({
    selector: 'vynil-toggle-input',
    templateUrl: './toggle-input.component.html',
    styleUrls: ['./toggle-input.component.scss'],
    providers: [TOGGLE_INPUT_ACCESSOR]
})
export class ToggleInputComponent extends InputComponent implements OnInit
{
    @Input() text:string;
    @Input() fixed:boolean;
    ngOnInit()
    {
        super.ngOnInit();
    }
    public onChange(value:any)
    {
        this.value = value.checked;
    }
}