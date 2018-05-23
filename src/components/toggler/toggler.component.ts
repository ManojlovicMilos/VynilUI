import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vynil-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss']
})
export class TogglerComponent
{
    @Input() title: string;
    @Input() toggled: boolean;
    @Output() toggle: EventEmitter<boolean>;
    public get icon():string { if(this.toggled) return "caret-up"; else return "caret-down"; }
    public constructor()
    {
        this.toggle = new EventEmitter<boolean>();
    }
    public onToggleChanged() : void
    {
        this.toggled = !this.toggled;
        this.toggle.emit(this.toggled);
    }
}