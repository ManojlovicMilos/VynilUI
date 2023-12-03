import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'vui-modify-options',
    templateUrl: './modify-options.component.html',
    styleUrls: ['./modify-options.component.scss'],
})
export class ModifyOptionsComponent {
    @Input() inline?: boolean;
    @Input() hasDuplicate?: boolean; 
    @Output() edited: EventEmitter<void>;
    @Output() deleted: EventEmitter<void>;
    @Output() duplicated: EventEmitter<void>;
    @Output() moved: EventEmitter<number>;

    public constructor() {
        this.edited = new EventEmitter<void>();
        this.deleted = new EventEmitter<void>();
        this.duplicated = new EventEmitter<void>();
        this.moved = new EventEmitter<number>();
    }

    public onEdit(event: MouseEvent): void {
        event.stopPropagation();
        this.edited.emit();
    }

    public onDelete(event: MouseEvent): void {
        event.stopPropagation();
        this.deleted.emit();
    }

    public onDuplicate(event: MouseEvent): void {
        event.stopPropagation();
        this.duplicated.emit();
    }

    public onMove(event: MouseEvent, modifier: number): void {
        event.stopPropagation();
        this.moved.emit(modifier);
    }
}
