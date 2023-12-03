import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Theme, ThemeService } from '../../../services/theme.service';

@Component({
    selector: 'vui-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input() height: string;

    public theme: Observable<Theme>;

    public constructor(
        private themeService: ThemeService,
    ) {
        this.height = '3rem';
        this.theme = this.themeService.theme.asObservable();
    }
}
