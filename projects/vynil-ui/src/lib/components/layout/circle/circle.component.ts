import { Component, Input } from '@angular/core';

const DEFAULT_RADIUS = '3rem';

@Component({
    selector: 'vui-circle',
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.scss'],
})
export class CircleComponent {
    @Input() radius: string;

    public constructor() {
        this.radius = DEFAULT_RADIUS;
    }
}
