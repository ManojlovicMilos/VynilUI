import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'vuid-message-demo-screen',
    templateUrl: './message-demo-screen.component.html',
    styleUrls: ['./message-demo-screen.component.scss']
})
export class MessageDemoScreenComponent {
    public messageVisible: boolean;
    public clickOnCurtainCloseEnabled: FormControl<boolean>;

    public constructor() {
        this.messageVisible = false;
        this.clickOnCurtainCloseEnabled = new FormControl<boolean>(false, { nonNullable: true });
    }

    public onToggle(): void {
        this.messageVisible = !this.messageVisible;
    }
}
