import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { InputComponent } from "./../input/input.component";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const DATE_INPUT_ACCESSOR: any =
{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateInputComponent),
    multi: true
};

@Component({
    selector: 'vynil-date-input',
    templateUrl: './date-input.component.html',
    styleUrls: ['./date-input.component.scss'],
    providers: [DATE_INPUT_ACCESSOR]
})
export class DateInputComponent extends InputComponent implements OnInit
{
    @Input() min:string;
    @Input() max:string;
    ngOnInit()
    {
        super.ngOnInit();
    }
}