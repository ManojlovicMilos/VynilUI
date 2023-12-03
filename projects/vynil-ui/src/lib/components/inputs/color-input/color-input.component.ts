/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const DEFAULT_VALUE = '#0096FF';

@Component({
    selector: 'vui-color-input',
    templateUrl: './color-input.component.html',
    styleUrls: ['./color-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: ColorInputComponent,
            multi: true,
        },
    ],
})
export class ColorInputComponent implements ControlValueAccessor {
    @Input() small?: boolean;

    public colorValue: string;
    public colorSelectorVisible: boolean; 

    public onTouch: (value: string) => void;
    public onChange: (value: string) => void;

    public set value(value: string){
        if (value !== this.colorValue) {
            this.colorValue = value;
        }
        this.onTouch(value);
        this.onChange(value);
    }

    public constructor() {
        this.colorValue = DEFAULT_VALUE;
        this.colorSelectorVisible = false;
        this.onTouch = () => {};
        this.onChange = () => {};
    }

    public onColorSelect(value: string): void {
        this.writeValue(value);
        this.toggleSelectorVisible(false);
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

    public toggleSelectorVisible(value: boolean): void {
        this.colorSelectorVisible = value;
    }
}
