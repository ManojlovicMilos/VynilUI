import {
    Input,
    Component,
} from '@angular/core';

@Component({
    selector: 'vui-navigation-link',
    templateUrl: './navigation-link.component.html',
    styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent {
    @Input() path?: string;
}
