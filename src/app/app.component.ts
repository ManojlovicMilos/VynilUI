import { Component } from '@angular/core';

@Component(
{
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent
{
    private _sideToggleEntries:any[] = [];
    public get sideToggleEntries():any[] { return this._sideToggleEntries; }
    public constructor()
    {
        this._sideToggleEntries.push({tooltip:"Library", icon:"book", method:function(){console.log("Library")}});
        this._sideToggleEntries.push({tooltip:"Settings", icon:"cog", method:function(){console.log("Settings")}});
        this._sideToggleEntries.push({tooltip:"More Info", icon:"info-circle", method:function(){console.log("More Info")}});
    }
}
