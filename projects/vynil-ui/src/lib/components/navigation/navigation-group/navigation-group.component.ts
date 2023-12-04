import { Component, Input } from '@angular/core';

@Component({
    selector: 'vui-navigation-group',
    templateUrl: './navigation-group.component.html',
    styleUrls: ['./navigation-group.component.scss']
})
export class NavigationGroupComponent {
    @Input() name?: string;
    @Input() open?: boolean;

    public constructor() {
        this.open = false;
    }

    public onToggle(): void {
        this.open = !this.open;
    }
}
