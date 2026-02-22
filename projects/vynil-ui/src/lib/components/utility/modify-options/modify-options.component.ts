import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'vui-modify-options',
    templateUrl: './modify-options.component.html',
    standalone: false
})
export class ModifyOptionsComponent {
    @Input() isInline?: boolean;
    @Input() hasMove?: boolean;
    @Input() hasEdit?: boolean;
    @Input() hasCopy?: boolean;
    @Input() hasRemove?: boolean;
    @Output() edited: EventEmitter<void>;
    @Output() removed: EventEmitter<void>;
    @Output() copied: EventEmitter<void>;
    @Output() moved: EventEmitter<number>;

    public constructor() {
        this.hasEdit = true;
        this.hasRemove = true;
        this.edited = new EventEmitter<void>();
        this.removed = new EventEmitter<void>();
        this.copied = new EventEmitter<void>();
        this.moved = new EventEmitter<number>();
    }

    public onMove(event: MouseEvent, modifier: number): void {
        event.stopPropagation();
        this.moved.emit(modifier);
    }

    public onEdit(event: MouseEvent): void {
        event.stopPropagation();
        this.edited.emit();
    }

    public onRemove(event: MouseEvent): void {
        event.stopPropagation();
        this.removed.emit();
    }

    public onCopy(event: MouseEvent): void {
        event.stopPropagation();
        this.copied.emit();
    }
}
