import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { InputComponent } from "./../input/input.component";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const TIME_INPUT_ACCESSOR: any =
{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimeInputComponent),
    multi: true
};

@Component({
    selector: 'vynil-time-input',
    templateUrl: './time-input.component.html',
    styleUrls: ['./time-input.component.scss'],
    providers: [TIME_INPUT_ACCESSOR]
})
export class TimeInputComponent extends InputComponent implements OnInit
{
    ngOnInit()
    {
        super.ngOnInit();
    }
}