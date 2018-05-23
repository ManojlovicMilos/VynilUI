import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'vinyl-side-mode-switch',
  templateUrl: './side-mode-switch.component.html',
  styleUrls: ['./side-mode-switch.component.scss']
})
export class SideModeSwitchComponent implements OnInit
{
    @Input() entries: any[];
    private _toggled: boolean;
    private _extended: boolean;
    public get toggled():boolean { return this._toggled; }
    public get extended():boolean { return this._extended; }
    public contructor()
    {
        this._extended = false;
    }
    public ngOnInit() : void
    {
        
    }
    public onMouseEnter() : void
    {
        this._extended = true;
        setTimeout(this.onUpdateToggled.bind(this), 300);
    }
    public onMouseLeave() : void
    {
        this._extended = false;
        this.onUpdateToggled();
    }
    public onUpdateToggled() : void
    {
        this._toggled = this._extended;
    }
    public onExecute(entry:any) : void
    {
        entry.method(entry);
    }
}
