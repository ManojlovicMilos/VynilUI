/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'vui-icon-input',
    templateUrl: './icon-input.component.html',
    styleUrls: ['./icon-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: IconInputComponent,
            multi: true,
        },
    ],
})
export class IconInputComponent implements ControlValueAccessor {
    @Input() icon?: string;

    public control: FormControl<string>;

    public onTouch: (value: string) => void;
    public onChange: (value: string) => void;

    set value(value: string){
        if (value !== this.control.value) {
            this.control.setValue(value);    
        }
        this.onChange(value);
        this.onTouch(value);
    }

    public constructor() {
        this.control = new FormControl<string>('', { nonNullable: true });
        this.control.valueChanges.subscribe((value) => {
            this.writeValue(value);
        });
        this.onTouch = () => {};
        this.onChange = () => {};
    }

    public writeValue(value: string): void {
        this.value = value;
    }

    public registerOnChange(onChange: (value: string) => void): void {
        this.onChange = onChange;
    }

    public registerOnTouched(onTouched: (value: string) => void): void {
        this.onTouch = onTouched;
    }
}
