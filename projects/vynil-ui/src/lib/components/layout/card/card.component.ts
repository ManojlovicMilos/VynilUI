import { Component, Input } from '@angular/core';

export type VynilUICardStyle = 'default' | 'dark' | 'active';

@Component({
    selector: 'vui-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Input() hasTabs?: boolean;
    @Input() hasBorder?: boolean;
    @Input() hasOverflow: boolean;
    @Input() cardStyle: VynilUICardStyle;

    constructor() {
        this.hasOverflow = true;
        this.cardStyle = 'default';
    }
}
