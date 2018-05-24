import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { InputComponent } from "./../input/input.component";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const NUMERIC_INPUT_ACCESSOR: any =
{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumericInputComponent),
    multi: true
};

@Component({
    selector: 'vynil-numeric-input',
    templateUrl: './numeric-input.component.html',
    styleUrls: ['./numeric-input.component.scss'],
    providers: [NUMERIC_INPUT_ACCESSOR]
})
export class NumericInputComponent extends InputComponent implements OnInit
{
    @Input() min:number;
    @Input() max:number;
    @Input() step:number;
    ngOnInit()
    {
        super.ngOnInit();
    }
}