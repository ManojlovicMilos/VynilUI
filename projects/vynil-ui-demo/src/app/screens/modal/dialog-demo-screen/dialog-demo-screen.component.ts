import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'vuid-dialog-demo-screen',
    templateUrl: './dialog-demo-screen.component.html',
    styleUrls: ['./dialog-demo-screen.component.scss']
})
export class DialogDemoScreenComponent {
    public dialogVisible: boolean;
    public clickOnCurtainCloseEnabled: FormControl<boolean>;

    public constructor() {
        this.dialogVisible = false;
        this.clickOnCurtainCloseEnabled = new FormControl<boolean>(false, { nonNullable: true });
    }

    public onToggle(): void {
        this.dialogVisible = !this.dialogVisible;
    }
}
