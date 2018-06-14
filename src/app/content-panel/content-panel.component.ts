import { Component } from '@angular/core';

@Component({
  selector: 'vynil-demo-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.scss']
})
export class DemoContentPanelComponent
{
    private _code:string;
    private _tabs:any[];
    private _selectedTab:string;
    public get selectedTab():string { return this._selectedTab; }
    public get tabs():any[] { return this._tabs; }
    public constructor()
    {
        this._selectedTab = "firefox";
        this._tabs = 
        [
            {
                title: "Chrome",
                value: "chrome",
                selected: false
            },
            {
                title: "Firefox",
                value: "firefox",
                selected: true
            },
            {
                title: "Opera",
                value: "opera",
                selected: false
            },
            {
                title: "Edge",
                value: "edge",
                selected: false
            },
            {
                title: "Code",
                value: "code-editor",
                selected: false
            }
        ]
    }
    public onTabChange(tab:any) : void
    {
        this._selectedTab = tab.value;
    }
    public onCodeChange(code:string) : void
    {
        this._code = code;
        console.log(code);
    }
}
