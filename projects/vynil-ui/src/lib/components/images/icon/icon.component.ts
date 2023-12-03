import { Component, Input } from '@angular/core';

export enum VynilUIIconSize {
    Small = 'small',
    Button = 'button',
    Medium = 'medium',
    Large = 'large',
}

@Component({
    selector: 'vui-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
    @Input() icon?: string;
    @Input() size: string;
    @Input() rotation: number;
    @Input() disabled: boolean;
    @Input() actionable: boolean;
    public IconSizeEnum = VynilUIIconSize;

    constructor() {
        this.size = VynilUIIconSize.Medium;
        this.disabled = false;
        this.actionable = false;
        this.rotation = 0;
    }
}
