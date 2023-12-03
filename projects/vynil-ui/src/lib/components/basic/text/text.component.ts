import { Component, Input } from '@angular/core';

export enum VynilUITextSize {
    ExtraSmall = 'xsmall',
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
    Header3 = 'header3',
    Header2 = 'header2',
    Header1 = 'header1',
}

@Component({
    selector: 'vui-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss'],
})
export class TextComponent {
    @Input() size?: string;
    @Input() color?: string;
    @Input() align?: string;
    @Input() weight?: string;
    @Input() padding?: string;
}
