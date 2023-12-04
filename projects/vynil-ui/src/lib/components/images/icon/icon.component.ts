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
    @Input() size: string;
    @Input() icon?: string;
    @Input() color?: string;
    @Input() rotation?: number;
    @Input() disabled?: boolean;
    @Input() actionable?: boolean;
    public IconSizeEnum = VynilUIIconSize;

    constructor() {
        this.size = VynilUIIconSize.Medium;
    }

    public get styleObject(): { [key: string]: string } {
        let styleObject: { [key: string]: string } = {};
        if (this.color) {
            styleObject['backgroundColor'] = this.color;
        }
        if (this.rotation) {
            styleObject['transform'] = 'rotate(' + this.rotation + 'deg)';
        }
        styleObject['mask'] = 'url(./assets/icons/' + (this.icon || 'cog') + '.svg)  no-repeat center',
        styleObject['-webkit-mask'] = styleObject['mask'];
        return styleObject;
    }
}
