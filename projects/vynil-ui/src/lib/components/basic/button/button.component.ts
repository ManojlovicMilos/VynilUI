import {
    Input,
    Output,
    Component,
    EventEmitter,
} from '@angular/core';

@Component({
    selector: 'vui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() lean?: boolean;
    @Input() centered?: boolean;
    @Input() disabled?: boolean;
    @Output() clicked: EventEmitter<void>;

    public constructor() {
        this.clicked = new EventEmitter<void>();
    }

    public onClick(): void {
        if (!this.disabled) {
            this.clicked.emit();
        }
    }
}
