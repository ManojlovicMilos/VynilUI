/* eslint-disable @typescript-eslint/no-empty-function */
import {
    Input,
    Output,
    Component,
    EventEmitter,
} from '@angular/core';
import {
    FormControl,
    NG_VALUE_ACCESSOR,
    ControlValueAccessor,
} from '@angular/forms';
import { VynilUITextSize } from '../../basic/text/text.component';

const DEFAULT_ALIGN = 'left';
const DEFAULT_PADDING = '0.5rem';

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
    @Input() size: string;
    @Input() flex: string;
    @Input() align: string;
    @Input() width: string;
    @Input() maxWidth: string;
    @Input() minWidth: string;
    @Input() margin: string;
    @Input() padding: string;
    @Input() type: InputType;
    @Input() hasBorder?: boolean;
    @Output() changed: EventEmitter<string>;

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
        this.size = VynilUITextSize.Medium;
        this.flex = 'none';
        this.align = DEFAULT_ALIGN;
        this.width = 'auto';
        this.maxWidth = 'none';
        this.margin = '0';
        this.minWidth = '0';
        this.type = 'text';
        this.padding = DEFAULT_PADDING;
        this.control = new FormControl<string>('', { nonNullable: true });
        this.changed = new EventEmitter<string>();
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
}
