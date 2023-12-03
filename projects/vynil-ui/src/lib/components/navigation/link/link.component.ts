import { Input, Component } from '@angular/core';
import { RoutingService } from '../../../services/routing.service';

@Component({
    selector: 'vui-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss']
})
export class LinkComponent {
    @Input() path?: string;

    public constructor(
        private routingService: RoutingService,
    ) {}

    public onNavigate(): void {
        if (this.path) {
            this.routingService.navigate(this.path);
        }
    }
}
