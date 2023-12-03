/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { VynilUITextSize } from '../../basic/text/text.component';

const DEFAULT_PADDING = '0.5rem';
const DEFAULT_EMPTY_TEXT = 'None';

export interface SelectInputOption<T> {
    text: string,
    value: T,
}

@Component({
    selector: 'vui-select-input',
    templateUrl: './select-input.component.html',
    styleUrls: ['./select-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: SelectInputComponent,
            multi: true,
        },
    ],
})
export class SelectInputComponent<T> implements ControlValueAccessor {
    @Input() textSize: string;
    @Input() flex: string;
    @Input() width: string;
    @Input() maxWidth: string;
    @Input() minWidth: string;
    @Input() margin: string;
    @Input() padding: string;
    @Input() emptyText: string;
    @Input() options: SelectInputOption<T>[];

    public selectedValue: SelectInputOption<T> | null;
    public dropdownVisible: boolean;
    public onTouch: (value: SelectInputOption<T>) => void;
    public onChange: (value: SelectInputOption<T>) => void;

    set value(value: SelectInputOption<T>){
        this.selectedValue = value;
        this.onChange(value);
        this.onTouch(value);
    }

    constructor() {
        this.textSize = VynilUITextSize.Medium;
        this.flex = 'none';
        this.width = 'auto';
        this.maxWidth = 'none';
        this.margin = '0';
        this.minWidth = '10rem';
        this.padding = DEFAULT_PADDING;
        this.options = [];
        this.selectedValue = null;
        this.dropdownVisible = false;
        this.emptyText = DEFAULT_EMPTY_TEXT;
        this.onTouch = () => {};
        this.onChange = () => {};
    }

    public writeValue(value: SelectInputOption<T>): void {
        this.value = value;
    }

    public registerOnChange(onChange: (value: SelectInputOption<T>) => void): void {
        this.onChange = onChange;
    }

    public registerOnTouched(onTouched: (value: SelectInputOption<T>) => void): void {
        this.onTouch = onTouched;
    }

    public onToggleDropdown(value?: boolean): void {
        this.dropdownVisible = value !== undefined ? value : !this.dropdownVisible;
    }

    public onSelectOption(option: SelectInputOption<T>): void {
        this.value = option || null;
        this.onToggleDropdown(false);
    }

    public identify(index: number, option: SelectInputOption<T>): T {
        return option.value;
    }
}
