import { Component, Input } from '@angular/core';

@Component({
  selector: 'vynil-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss']
})
export class TogglerComponent
{
    @Input() title: string;
    @Input() toggled: boolean;
    public get icon():string { if(this.toggled) return "caret-up"; else return "caret-down"; }
    public onToggle() : void
    {
        this.toggled = !this.toggled;
    }
}