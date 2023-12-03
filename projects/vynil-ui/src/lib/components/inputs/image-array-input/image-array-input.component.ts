/* eslint-disable @typescript-eslint/no-empty-function */
import { environment } from 'src/environments/environment';
import { Component, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
    selector: 'ooi-image-array-input',
    templateUrl: './image-array-input.component.html',
    styleUrls: ['./image-array-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: ImageArrayInputComponent,
            multi: true,
        },
    ],
})
export class ImageArrayInputComponent  implements ControlValueAccessor {
    @Output() changed: EventEmitter<string>;

    public values: string[];
    public uploadModalVisible: boolean;
    public imageUrlControl: FormControl<string | null>;

    public onTouch: (value: string[]) => void;
    public onChange: (value: string[]) => void;

    public get uploadFeatureEnabled(): boolean {
        return environment.featureFlags.upload;
    }
    
    set value(value: string[]){
        if (value) {
            this.values = [...value];
        } else {
            this.values = [];
        }
        this.onChange(value || []);
        this.onTouch(value || []);
    }

    public constructor() {
        this.values = [];
        this.uploadModalVisible = false;
        this.changed = new EventEmitter<string>();
        this.imageUrlControl = new FormControl<string | null>('', Validators.required);
        this.onTouch = () => {};
        this.onChange = () => {};
    }

    public writeValue(value: string[]): void {
        this.value = value;
    }

    public registerOnChange(onChange: (value: string[]) => void): void {
        this.onChange = onChange;
    }

    public registerOnTouched(onTouched: (value: string[]) => void): void {
        this.onTouch = onTouched;
    }

    public onAdd(): void {
        if(this.imageUrlControl.value) {
            this.value = [...this.values, this.imageUrlControl.value];
            this.imageUrlControl.setValue('');
        }
    }

    public onRemove(removed: number): void {
        this.value = this.values.filter((_entry: string, index: number) => index !== removed);
    }

    public onToggleUploadModal(visible: boolean): void {
        this.uploadModalVisible = visible;
    }

    public onUploadComplete(url: string): void {
        this.value = [...this.values, url];
        this.uploadModalVisible = false;
    }
}
