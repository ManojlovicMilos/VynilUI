import {
    Input,
    Output,
    Component,
    EventEmitter,
} from '@angular/core';

const DEFAULT_OPTION_1 = 'Yes';
const DEFAULT_OPTION_2 = 'No';

@Component({
    selector: 'vui-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
    @Input() text: string;
    @Input() visible: boolean;
    @Input() option1Text: string;
    @Input() option2Text: string;
    @Input() closeOnCurtain: boolean;
    @Output() closed: EventEmitter<void>;
    @Output() option1Selected: EventEmitter<void>;
    @Output() option2Selected: EventEmitter<void>;

    public constructor() {
        this.visible = false;
        this.closeOnCurtain = false;
        this.text = '';
        this.option1Text = DEFAULT_OPTION_1;
        this.option2Text = DEFAULT_OPTION_2;
        this.closed = new EventEmitter<void>();
        this.option1Selected = new EventEmitter<void>();
        this.option2Selected = new EventEmitter<void>();
    }

    public onClosed(): void {
        if (this.closeOnCurtain) {
            this.closed.emit();
        }
    }

    public onOptionSelect(option: number): void {
        if (option === 1) {
            this.option1Selected.emit();
        } else if (option === 2) {
            this.option2Selected.emit();
        }
    }
}
