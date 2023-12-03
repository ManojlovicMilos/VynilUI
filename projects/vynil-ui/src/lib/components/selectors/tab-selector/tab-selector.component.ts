import {
    Input,
    Output,
    Component,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'vui-tab-selector',
    templateUrl: './tab-selector.component.html',
    styleUrls: ['./tab-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabSelectorComponent {
    @Input() options: string[];
    @Input() selectedTab: string;
    @Input() standalone: boolean;
    @Output() selected: EventEmitter<string>;

    public constructor() {
        this.options = [];
        this.selectedTab = '';
        this.standalone = false;
        this.selected = new EventEmitter<string>();
    }

    public onSelect(option: string): void {
        this.selected.emit(option);
    }
}
