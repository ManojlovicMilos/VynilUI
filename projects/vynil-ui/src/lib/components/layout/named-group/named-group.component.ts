import { Component, Input } from '@angular/core';

const DEFAULT_NAME = 'Group';

@Component({
    selector: 'vui-named-group',
    templateUrl: './named-group.component.html',
    styleUrl: './named-group.component.scss',
    standalone: false,
})
export class NamedGroupComponent {
    @Input() name?: string;
    @Input() textSize?: string;

    constructor() {
        this.name = DEFAULT_NAME;
        this.textSize = 'medium';
    }
}
