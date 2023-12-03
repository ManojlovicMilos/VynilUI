import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, Input, SecurityContext } from '@angular/core';

const DEFAULT_DIMENSION = 'auto';

interface IStyleObject {
    [key: string]: string | null
}

@Component({
    selector: 'vui-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
    @Input() url?: string;
    @Input() width?: string;
    @Input() height?: string;
    @Input() circle?: boolean;
    @Input() border?: string;
    @Input() borderRadius?: string;
    @Input() backgroundSize?: string;
    @Input() useBackgroundImage?: boolean;

    public get sanitizedUrl(): SafeUrl | undefined {
        return this.url
            && this.domSanitizer.bypassSecurityTrustUrl(this.url)
            || undefined;
    }

    public get styles(): IStyleObject {
        let styles: IStyleObject = {
            'width': this.width || DEFAULT_DIMENSION,
            'height': this.height || DEFAULT_DIMENSION,
            'min-width': this.width || DEFAULT_DIMENSION,
            'min-height': this.height || DEFAULT_DIMENSION,
        };
        if (this.useBackgroundImage && this.url) {
            styles = {
                ...styles,
                'background-image': this.domSanitizer.sanitize(SecurityContext.STYLE, 'url(' + this.url + ')'),
                'background-size': this.backgroundSize || 'cover'
            }
        }
        if (this.border !== undefined) {
            styles['border'] = this.border;
        }
        if (this.borderRadius !== undefined) {
            styles['border-radius'] = this.borderRadius;
        }
        return styles;
    }

    public constructor(
        private domSanitizer: DomSanitizer,
    ) {}
}
