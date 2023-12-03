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
import { environment } from 'src/environments/environment';

const DEFAULT_HEIGHT = '3rem';

@Component({
    selector: 'vui-image-input',
    templateUrl: './image-input.component.html',
    styleUrls: ['./image-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: ImageInputComponent,
            multi: true,
        },
    ],
})
export class ImageInputComponent implements ControlValueAccessor {
    @Input() height: string;
    @Output() changed: EventEmitter<string>;

    public uploadModalVisible: boolean;
    public control: FormControl<string | null>;

    public onTouch: (value: string) => void;
    public onChange: (value: string) => void;

    public get uploadFeatureEnabled(): boolean {
        return environment.featureFlags.upload;
    }

    public get value(): string {
        return this.control.value || '';
    }

    public set value(value: string){
        if (value !== this.control.value) {
            this.control.setValue(value);
        }
        this.onChange(value);
        this.onTouch(value);
    }

    constructor() {
        this.height = DEFAULT_HEIGHT;
        this.uploadModalVisible = false;
        this.control = new FormControl<string>('');
        this.changed = new EventEmitter<string>();
        this.control.valueChanges.subscribe((value: string | null) => {
            if (value) {
                this.writeValue(value);
            }
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

    public onToggleUploadModal(visible: boolean): void {
        this.uploadModalVisible = visible;
    }

    public onUploadComplete(url: string): void {
        this.control.patchValue(url);
        this.uploadModalVisible = false;
    }
}
