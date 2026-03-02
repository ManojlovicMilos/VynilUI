import { Component } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { ListInputEntry } from 'projects/vynil-ui/src/lib/components/inputs/list-input/list-input.component';

const DEMO_ITEMS = [
    { id: '1', text: 'One', value: 1, icon: 'vynil', image: 'https://cdn.stocksnap.io/img-thumbs/960w/vinyl-record_OTOSZLA6WF.jpg' },
    { id: '2', text: 'Two', value: 2, icon: 'vynil', image: 'https://cdn.stocksnap.io/img-thumbs/960w/vinyl-record_OTOSZLA6WF.jpg' },
    { id: '3', text: 'Three', value: 3, icon: 'vynil', image: 'https://cdn.stocksnap.io/img-thumbs/960w/vinyl-record_OTOSZLA6WF.jpg' },
    { id: '4', text: 'Four', value: 4, icon: 'vynil', image: 'https://cdn.stocksnap.io/img-thumbs/960w/vinyl-record_OTOSZLA6WF.jpg' },
]

const NEW_ITEM = { id: '5', text: 'Infinite', value: 5, icon: 'vynil', image: 'https://cdn.stocksnap.io/img-thumbs/960w/vinyl-record_OTOSZLA6WF.jpg' };

@Component({
    selector: 'vuid-list-input-demo-screen',
    templateUrl: './list-input-demo-screen.component.html',
    styleUrls: ['./list-input-demo-screen.component.scss'],
    standalone: false
})
export class ListInputDemoScreenComponent {
    public selectedEntry: ListInputEntry<number> | null;
    public showIconsControl: FormControl<boolean>;
    public showImagesControl: FormControl<boolean>;
    public control: FormControl<ListInputEntry<number>[]>;

    public get value(): ListInputEntry<number>[] {
        return this.control.value;
    }

    public constructor() {
        this.selectedEntry = null;
        this.showIconsControl = new FormControl<boolean>(false, { nonNullable: true });
        this.showImagesControl = new FormControl<boolean>(false, { nonNullable: true });
        this.control = new FormControl<ListInputEntry<number>[]>([ ...DEMO_ITEMS ], { nonNullable: true });
    }

    public onAddValue(): void {
        this.control.setValue([
            ...this.control.value,
            NEW_ITEM
        ])
    }

    public identify(index: number, entry: ListInputEntry<number>): string {
        return entry.id;
    }

    public onEntrySelected(entry: ListInputEntry<number> | null): void {
        this.selectedEntry = entry;
    }
}
