import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Theme, ThemeService } from '../../../services/theme.service';

const DEFAULT_PADDING = '2rem 3rem';

@Component({
    selector: 'vui-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
})
export class PageComponent {
    @Input() padding: string;
    @Input() background?: string;

    public theme: Observable<Theme>;

    public constructor(
        private themeService: ThemeService,
    ) {
        this.padding = DEFAULT_PADDING;
        this.theme = this.themeService.theme.asObservable();
    }
}
