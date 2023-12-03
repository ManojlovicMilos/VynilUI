import { Component, EventEmitter, Input, Output } from '@angular/core';

const POSSIBLE_COLORS = ['#D22B2B', '#50C878', '#0096FF', '#FCF55F', '#FF5F1F', '#7F00FF', '#9A9A9A', '#000000'];

@Component({
    selector: 'ooi-color-selector',
    templateUrl: './color-selector.component.html',
    styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent {
    @Input() selectedColor?: string;
    @Output() selected: EventEmitter<string>;

    public availableColors: string[];

    constructor() {
        this.availableColors = POSSIBLE_COLORS;
        this.selected = new EventEmitter<string>();
    }

    public onSelectColor(color: string): void {
        this.selected.emit(color);
    }
}
