import { Component, Input } from '@angular/core';

const VIEW_STYLE_INPUTS = [
    'top',
    'left',
    'right',
    'bottom',
    'flex',
    'width',
    'height',
    'maxWidth',
    'maxHeight',
    'minWidth',
    'minHeight',
    'margin',
    'padding',
    'rowGap',
    'columnGap',
    'position',
    'borderRadius',
    'backgroundColor',
    'flexDirection',
    'alignItems',
    'justifyContent',
]

@Component({
    selector: 'vui-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
    @Input() wrap: boolean;
    @Input() relative: boolean;
    @Input() scrollable: boolean;
    @Input() top?: string;
    @Input() left?: string;
    @Input() right?: string;
    @Input() bottom?: string;
    @Input() flex?: string;
    @Input() width?: string;
    @Input() height?: string;
    @Input() maxWidth?: string;
    @Input() maxHeight?: string;
    @Input() minWidth?: string;
    @Input() minHeight?: string;
    @Input() margin?: string;
    @Input() padding?: string;
    @Input() rowGap?: string;
    @Input() columnGap?: string;
    @Input() position?: string;
    @Input() borderRadius?: string;
    @Input() backgroundColor?: string;
    @Input() flexDirection?: string;
    @Input() alignItems?: string;
    @Input() justifyContent?: string;

    public constructor() {
        this.wrap = false;
        this.relative = false;
        this.scrollable = false;
    }

    public get styleObjectJSON(): string {
        return JSON.stringify(this.styleObject);
    }

    public get styleObject(): { [key: string]: string } {
        let styleObject: { [key: string]: string } = {};
        const componentObject = this as unknown as { [key: string]: string };
        VIEW_STYLE_INPUTS.forEach((propertyName: string) => {
            if (componentObject[propertyName]) {
                styleObject[propertyName] = componentObject[propertyName];
            }
        });
        return styleObject;
    }
}
