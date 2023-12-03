import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'vui-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input() visible: boolean;
    @Output() closed: EventEmitter<void>;

    public constructor() {
        this.visible = false;
        this.closed = new EventEmitter();
    }

    public onCurtainClick(): void {
        this.closed.emit();
    }

    public onContentClick(event: MouseEvent): void {
        event.stopPropagation();
    }
}
