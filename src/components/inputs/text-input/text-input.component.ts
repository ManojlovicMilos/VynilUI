import { Component, forwardRef, Input } from '@angular/core';
import { InputComponent } from "./../input/input.component";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const TEXT_INPUT_ACCESSOR: any =
{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextInputComponent),
    multi: true
};

@Component({
    selector: 'vynil-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss'],
    providers: [TEXT_INPUT_ACCESSOR]
})
export class TextInputComponent extends InputComponent
{
    @Input() length:number;
}
