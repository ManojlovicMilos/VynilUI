import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { InputComponent } from "./../input/input.component";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const PASSWORD_INPUT_ACCESSOR: any =
{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordInputComponent),
    multi: true
};

@Component({
    selector: 'vynil-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['./password-input.component.scss'],
    providers: [PASSWORD_INPUT_ACCESSOR]
})
export class PasswordInputComponent extends InputComponent implements OnInit
{
    @Input() length:number;
    ngOnInit()
    {
        super.ngOnInit();
    }
}
