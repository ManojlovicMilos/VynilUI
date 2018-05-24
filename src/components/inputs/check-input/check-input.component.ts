import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { InputComponent } from "./../input/input.component";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CHECK_INPUT_ACCESSOR: any =
{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckInputComponent),
    multi: true
};

@Component({
    selector: 'vynil-check-input',
    templateUrl: './check-input.component.html',
    styleUrls: ['./check-input.component.scss'],
    providers: [CHECK_INPUT_ACCESSOR]
})
export class CheckInputComponent extends InputComponent implements OnInit
{
    @Input() text:string;
    @Input() fixed:boolean;
    ngOnInit()
    {
        super.ngOnInit();
    }
}