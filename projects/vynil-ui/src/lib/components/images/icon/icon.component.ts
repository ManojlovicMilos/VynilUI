import { Component, Input } from '@angular/core';

const ICON_SIZE_VARIABLES: { [key:string]: string } = {
    s: 'var(--vui-variable-icon-size-s)',
    m: 'var(--vui-variable-icon-size-m)',
    l: 'var(--vui-variable-icon-size-l)',
    xl: 'var(--vui-variable-icon-size-xl)',
    small: 'var(--vui-variable-icon-size-s)',
    button: 'var(--vui-variable-icon-size-button)',
    medium: 'var(--vui-variable-icon-size-m)',
    large: 'var(--vui-variable-icon-size-l)',
    xlarge: 'var(--vui-variable-icon-size-xl)',
};

export enum VynilUIIconSize {
    Small = 'small',
    Button = 'button',
    Medium = 'medium',
    Large = 'large',
    ExtraLarge = 'xlarge'
}

@Component({
    selector: 'vui-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    standalone: false
})
export class IconComponent {
    @Input() size: string;
    @Input() icon?: string;
    @Input() color?: string;
    @Input() rotation?: number;
    @Input() disabled?: boolean;
    @Input() scaleMask?: boolean;
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
        if (this.scaleMask) {
            styleObject['mask-size'] = ICON_SIZE_VARIABLES[this.size];
        }
        return styleObject;
    }
}
