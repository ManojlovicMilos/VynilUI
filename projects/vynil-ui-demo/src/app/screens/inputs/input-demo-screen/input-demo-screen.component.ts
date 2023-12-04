import { Component } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'vuid-input-demo-screen',
    templateUrl: './input-demo-screen.component.html',
    styleUrls: ['./input-demo-screen.component.scss']
})
export class InputDemoScreenComponent {
    public form: UntypedFormGroup;

    public get value(): {
        text: string,
        number: number,
        password: string,
        inputWithIcon: string,
    } {
        return this.form.value;
    }

    public constructor() {
        this.form = new UntypedFormGroup({
            text: new FormControl<string>('Text'),
            number: new FormControl<number>(123),
            password: new FormControl<string>('secret'),
            inputWithIcon: new FormControl<string>('Text with icon'),
        });
    }
}
