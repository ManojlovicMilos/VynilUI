import { Component } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'vuid-color-input-demo-screen',
  templateUrl: './color-input-demo-screen.component.html',
  styleUrls: ['./color-input-demo-screen.component.scss']
})
export class ColorInputDemoScreenComponent {
  public form: UntypedFormGroup;

  public get value(): { small: string, normal: string } {
      return this.form.value;
  }

  public constructor() {
      this.form = new UntypedFormGroup({
          small: new FormControl<string>('#FCF55F'),
          normal: new FormControl<string>('#50C878'),
      });
  }
}
