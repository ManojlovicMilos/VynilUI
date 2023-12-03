/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
    selector: 'vui-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements ControlValueAccessor {
    @Output() queryChange: EventEmitter<string>;

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
        this.queryChange = new EventEmitter<string>();
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
