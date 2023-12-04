import { Component, Input } from '@angular/core';

@Component({
    selector: 'vui-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input() height: string;

    public constructor() {
        this.height = '3rem';
    }
}
