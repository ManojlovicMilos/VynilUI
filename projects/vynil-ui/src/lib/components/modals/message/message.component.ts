import {
    Input,
    Output,
    Component,
    EventEmitter,
} from '@angular/core';

const DEFAULT_CONFIRM = 'OK';

@Component({
    selector: 'ooi-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
    @Input() text: string;
    @Input() visible: boolean;
    @Input() confirmText: string;
    @Input() closeOnCurtain: boolean;
    @Output() closed: EventEmitter<void>;

    public constructor() {
        this.visible = false;
        this.closeOnCurtain = false;
        this.text = '';
        this.confirmText = DEFAULT_CONFIRM;
        this.closed = new EventEmitter<void>();
    }

    public onClosed(): void {
        if (this.closeOnCurtain) {
            this.closed.emit();
        }
    }

    public onConfirm(): void {
        this.closed.emit();
    }
}
