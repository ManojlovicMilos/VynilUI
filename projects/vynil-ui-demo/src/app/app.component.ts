import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public sidebarLinkTreeGroups: { name: string, open?: boolean, items: { label: string, link: string }[] }[];

    public constructor() {
        this.sidebarLinkTreeGroups = [
            { 
                name: 'Basic',
                open: true,
                items: [
                    { label: 'Text', link: 'text' },
                    { label: 'Button', link: 'button' },
                ]
            },
            { 
                name: 'Images',
                open: true,
                items: [
                    { label: 'Icon', link: 'icon' },
                    { label: 'Image', link: 'image' },
                ]
            },
            { 
                name: 'Forms',
                open: true,
                items: [
                    { label: 'Input', link: 'input' },
                    { label: 'Select Input', link: 'select-input' },
                    { label: 'Toggle Input', link: 'toggle-input' },
                    { label: 'Color Input', link: 'color-input' },
                    { label: 'Image Input', link: 'image-input' },
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
