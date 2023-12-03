/* eslint-disable @typescript-eslint/no-empty-function */
import {
    Input,
    Output,
    Component,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';
import {
    NG_VALUE_ACCESSOR,
    ControlValueAccessor,
} from '@angular/forms';

@Component({
    selector: 'vui-toggle-input',
    templateUrl: './toggle-input.component.html',
    styleUrls: ['./toggle-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: ToggleInputComponent,
            multi: true,
        },
    ],
})
export class ToggleInputComponent implements ControlValueAccessor {
    @Input() disabled?: boolean;
    @Output() changed: EventEmitter<boolean>;

    public activeValue: boolean;

    public onTouch: (value: boolean) => void;
    public onChange: (value: boolean) => void;

    set value(value: boolean){
        if (value !== this.activeValue) {
            this.activeValue = value;
        }
        this.onChange(value);
        this.onTouch(value);
    }

    constructor() {
        this.activeValue = false;
        this.onTouch = () => {};
        this.onChange = () => {};
        this.changed = new EventEmitter<boolean>();
    }

    public onToggle(): void {
        if (this.disabled) {
            return;
        }
        this.activeValue = !this.activeValue;
        this.writeValue(this.activeValue);
    }

    public writeValue(value: boolean): void {
        this.value = value;
        this.onChange(value);
        this.changed.emit(value);
    }

    public registerOnChange(onChange: (value: boolean) => void): void {
        this.onChange = onChange;
    }

    public registerOnTouched(onTouched: (value: boolean) => void): void {
        this.onTouch = onTouched;
    }
}
