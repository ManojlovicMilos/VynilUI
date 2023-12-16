import { Component } from '@angular/core';

@Component({
    selector: 'vuid-modal-demo-screen',
    templateUrl: './modal-demo-screen.component.html',
    styleUrls: ['./modal-demo-screen.component.scss']
})
export class ModalDemoScreenComponent {
    public modalVisible: boolean;

    public constructor() {
        this.modalVisible = false;
    }

    public onToggle(): void {
        this.modalVisible = !this.modalVisible;
    }
}
