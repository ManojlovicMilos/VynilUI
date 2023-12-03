import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public sidebarLinkTreeGroups: { name: string, items: { label: string, link: string }[] }[];

    public constructor() {
        this.sidebarLinkTreeGroups = [
            { 
                name: 'Basic',
                items: [
                    { label: 'Text', link: 'text' },
                    { label: 'Button', link: 'button' },
                ]
            },
            { 
                name: 'Images',
                items: [
                    { label: 'Icon', link: 'icon' },
                    { label: 'Image', link: 'image' },
                ]
            },
            { 
                name: 'Forms',
                items: [
                    { label: 'Input', link: 'input' },
                    { label: 'Toggle Input', link: 'toggle-input' },
                    { label: 'Color Input', link: 'color-input' },
                ]
            },
            { 
                name: 'Layout',
                items: [
                    { label: 'View', link: 'view' },
                    { label: 'Card', link: 'card' },
                ]
            },
        ]
    }
}
