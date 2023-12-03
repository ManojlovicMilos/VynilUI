import { Component } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'vuid-toggle-input-demo-screen',
    templateUrl: './toggle-input-demo-screen.component.html',
    styleUrls: ['./toggle-input-demo-screen.component.scss']
})
export class ToggleInputDemoScreenComponent {
    public form: UntypedFormGroup;

    public get value(): { first: boolean, second: boolean, disabled: boolean } {
        return this.form.value;
    }

    public constructor() {
        this.form = new UntypedFormGroup({
            first: new FormControl<boolean>(false),
            second: new FormControl<boolean>(true),
            disabled: new FormControl<boolean>(false),
        });
    }
}
