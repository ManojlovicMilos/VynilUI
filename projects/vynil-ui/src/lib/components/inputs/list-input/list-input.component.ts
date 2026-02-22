/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { VynilUITextSize } from '../../basic/text/text.component';

const DEFAULT_PADDING = '0.5rem 0.5rem 0.5rem 1rem';
const DEFAULT_EMPTY_TEXT = 'None';

export interface ListInputEntry<T> {
    value: T;
    id: string,
    text: string,
    icon?: string;
    image?: string;
}

@Component({
    selector: 'vui-list-input',
    templateUrl: './list-input.component.html',
    styleUrls: ['./list-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: ListInputComponent,
            multi: true,
        },
    ],
    standalone: false
})
export class ListInputComponent<T> implements ControlValueAccessor {
    @Input() hasControls: boolean;
    @Input() hasMove: boolean;
    @Input() hasEdit: boolean;
    @Input() hasCopy: boolean;
    @Input() hasRemove: boolean;
    @Input() showIcons: boolean;
    @Input() showImages: boolean;
    @Input() roundImage?: boolean;
    @Input() flex: string;
    @Input() width: string;
    @Input() height: string;
    @Input() margin: string;
    @Input() padding: string;
    @Input() maxWidth: string;
    @Input() minWidth: string;
    @Input() textSize: string;
    @Input() imageHeight: string;
    @Input() emptyText: string;
    @Input() selectedValue: ListInputEntry<T> | null;

    @Output() selected: EventEmitter<ListInputEntry<T> | null>;
    @Output() edited: EventEmitter<ListInputEntry<T> | null>;
    @Output() copied: EventEmitter<ListInputEntry<T> | null>;
    @Output() removed: EventEmitter<ListInputEntry<T> | null>;

    public onTouch: (value: ListInputEntry<T>[]) => void;
    public onChange: (value: ListInputEntry<T>[]) => void;

    public localValue: ListInputEntry<T>[];

    set value(value: ListInputEntry<T>[]){
        this.localValue = value;
        this.onChange(value);
        this.onTouch(value);
    }

    constructor() {
        this.hasControls = false;
        this.hasMove = true;
        this.hasEdit = false;
        this.hasCopy = false;
        this.hasRemove = true;
        this.showIcons = false;
        this.showImages = false;
        this.flex = 'none';
        this.width = 'auto';
        this.height = '10rem';
        this.margin = '0';
        this.padding = DEFAULT_PADDING;
        this.maxWidth = 'none';
        this.minWidth = '10rem';
        this.textSize = VynilUITextSize.Medium;
        this.imageHeight = '3rem';
        this.emptyText = DEFAULT_EMPTY_TEXT;
        this.selectedValue = null;
        this.localValue = [];
        this.onTouch = () => {};
        this.onChange = () => {};
        this.selected = new EventEmitter<ListInputEntry<T> | null>();
        this.edited = new EventEmitter<ListInputEntry<T> | null>();
        this.copied = new EventEmitter<ListInputEntry<T> | null>();
        this.removed = new EventEmitter<ListInputEntry<T> | null>();
    }

    public writeValue(value: ListInputEntry<T>[]): void {
        this.value = value;
        this.localValue = value;
    }

    public registerOnChange(onChange: (value: ListInputEntry<T>[]) => void): void {
        this.onChange = onChange;
    }

    public registerOnTouched(onTouched: (value: ListInputEntry<T>[]) => void): void {
        this.onTouch = onTouched;
    }

    public onMove(index: number, diff: number): void {
        const newValue = this.moveElement(index, index + diff);
        this.writeValue(newValue);
    }

    public onEdit(entry: ListInputEntry<T>): void {
        this.edited.emit(entry);
    }

    public onCopy(entry: ListInputEntry<T>): void {
        this.copied.emit(entry);
    }

    public onRemove(removedEntry: ListInputEntry<T>): void {
        this.removed.emit(removedEntry);
        const newValue = this.localValue.filter((entry: ListInputEntry<T>) => entry.id !== removedEntry.id);
        this.writeValue(newValue);
    }

    public onSelectOption(entry: ListInputEntry<T>): void {
        if (this.selectedValue?.id === entry.id) {
            this.selected.emit(null);
        } else {
            this.selected.emit(entry);
        }
    }

    public identify(index: number, entry: ListInputEntry<T>): string {
        return entry.id;
    }

    private moveElement(from: number, to: number) {
        if (from < 0 || from >= this.localValue.length
            || to < 0 || to >= this.localValue.length) {
            return this.localValue;
        }
        const element = this.localValue.splice(from, 1)[0];
        this.localValue.splice(to, 0, element);
        return this.localValue;
    }
}
