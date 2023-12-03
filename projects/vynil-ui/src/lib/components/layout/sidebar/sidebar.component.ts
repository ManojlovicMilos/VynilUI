import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Theme, ThemeService } from '../../../services/theme.service';

@Component({
    selector: 'vui-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    @Input() width: string;
    @Input() headerHeight: string;

    public theme: Observable<Theme>;

    public constructor(
        private themeService: ThemeService,
    ) {
        this.width = '15rem';
        this.headerHeight = '0px';
        this.theme = this.themeService.theme.asObservable();
    }
}
