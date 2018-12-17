import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'vynil-button-input',
    templateUrl: './button-input.component.html',
    styleUrls: ['./button-input.component.scss']
})
export class ButtonInputComponent
{
    @Input() enabled: boolean;
    @Input() text: string;
    @Output() press: EventEmitter<any>;
    public constructor()
    {
        this.press = new EventEmitter<any>();
    }
    public onClick(event:MouseEvent) : void
    {
        this.press.emit();
    }
}
