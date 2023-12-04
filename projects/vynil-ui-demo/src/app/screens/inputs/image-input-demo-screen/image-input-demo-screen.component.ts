import { Component } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'vuid-image-input-demo-screen',
    templateUrl: './image-input-demo-screen.component.html',
    styleUrls: ['./image-input-demo-screen.component.scss']
})
export class ImageInputDemoScreenComponent {
    public form: UntypedFormGroup;

    public get value(): { url: string | undefined } {
        return this.form.value;
    }

    public constructor() {
        this.form = new UntypedFormGroup({
            url: new FormControl<string | undefined>(undefined),
        });
    }
}
