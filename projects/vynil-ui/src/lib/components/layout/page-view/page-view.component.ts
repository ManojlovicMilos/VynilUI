import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

const IMAGE_URL_EXTENSIONS = ['.PNG', '.JPG', '.JPEG'];

@Component({
    selector: 'vui-page-view',
    templateUrl: './page-view.component.html',
    styleUrls: ['./page-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageViewComponent {
    @Input() url: string;

    public get sanitizedUrl(): SafeUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
    }

    public get isImageUrl(): boolean {
        if (!this.url) return false;
        const baseUrl = this.url.toUpperCase().split('?')[0];
        for (const extension of IMAGE_URL_EXTENSIONS) {
            if (baseUrl.endsWith(extension)) {
                return true;
            }
        }
        return false;
    }

    public constructor(
        private domSanitizer: DomSanitizer,
    ) {
        this.url = '';
    }
}
