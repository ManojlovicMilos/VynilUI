import { Component } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { SelectInputOption } from 'projects/vynil-ui/src/lib/components/inputs/select-input/select-input.component';

const SELECT_OPTIONS: SelectInputOption<string>[] = [
    { text: 'Option 1', value: 'option1' },
    { text: 'Option 2', value: 'option2' },
    { text: 'Option 3', value: 'option3' },
    { text: 'Option 4', value: 'option4' },
];

@Component({
    selector: 'vuid-select-input-demo-screen',
    templateUrl: './select-input-demo-screen.component.html',
    styleUrls: ['./select-input-demo-screen.component.scss']
})
export class SelectInputDemoScreenComponent {
    public options: SelectInputOption<string>[];
    public form: UntypedFormGroup;

    public get value(): { basic: SelectInputOption<string> | undefined, withEmptyText: SelectInputOption<string> | undefined } {
        return this.form.value;
    }

    public constructor() {
        this.options = SELECT_OPTIONS;
        this.form = new UntypedFormGroup({
            basic: new FormControl<SelectInputOption<string> | undefined>(undefined),
            withEmptyText: new FormControl<SelectInputOption<string> | undefined>(undefined),
        });
    }
}
