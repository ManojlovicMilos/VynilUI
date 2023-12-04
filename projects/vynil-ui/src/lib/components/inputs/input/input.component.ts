/* eslint-disable @typescript-eslint/no-empty-function */
import {
    Input,
    Component,
} from '@angular/core';
import {
    FormControl,
    NG_VALUE_ACCESSOR,
    ControlValueAccessor,
} from '@angular/forms';
import { VynilUITextSize } from '../../basic/text/text.component';

const INPUT_STYLE_INPUTS = [
    'flex',
    'margin',
    'padding',
    'width',
    'maxWidth',
    'minWidth',
    'textAlign',
];

export type InputType = 'text' | 'number' | 'password';

@Component({
    selector: 'vui-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: InputComponent,
            multi: true,
        },
    ],
})
export class InputComponent implements ControlValueAccessor {
    @Input() textSize: string;
    @Input() flex?: string;
    @Input() margin?: string;
    @Input() padding?: string;
    @Input() align?: string;
    @Input() width?: string;
    @Input() maxWidth?: string;
    @Input() minWidth?: string;
    @Input() type: InputType;

    public control: FormControl<string>;

    public onTouch: (value: string) => void;
    public onChange: (value: string) => void;

    set value(value: string){
        if (value !== this.control.value
            && !(this.type === 'number' && isNaN(+value))) {
            this.control.setValue(value);
        }
        this.onChange(value);
        this.onTouch(value);
    }

    constructor() {
        this.type = 'text';
        this.textSize = VynilUITextSize.Medium;
        this.control = new FormControl<string>('', { nonNullable: true });
        this.control.valueChanges.subscribe((value) => {
            if (this.type === 'number') {
                // TODO: Find a proper fix for this one, perhaps separate number input
                value = parseFloat(value) as unknown as string;
            }
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

    public get styleObject(): { [key: string]: string } {
        let styleObject: { [key: string]: string } = {};
        const componentObject = this as unknown as { [key: string]: string };
        INPUT_STYLE_INPUTS.forEach((propertyName: string) => {
            if (componentObject[propertyName]) {
                styleObject[propertyName] = componentObject[propertyName];
            }
        });
        return styleObject;
    }
}
