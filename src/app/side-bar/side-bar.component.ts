import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'vynil-demo-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class DemoSideBarComponent implements OnInit
{
    private _inputsVisible:boolean;
    private _treeViewVisible:boolean;
    private _treeViewData:any;
    public get inputsVisible():boolean { return this._inputsVisible; }
    public get treeViewVisible():boolean { return this._treeViewVisible; }
    public get treeViewData():any { return this._treeViewData; }
    public constructor()
    {
        this._inputsVisible = true;
        this._treeViewVisible = true;
        this._treeViewData = 
        {
            title: "Browsers",
            icon: "connectdevelop",
            children:
            [
                {
                    title: "Chrome",
                    icon: "chrome",
                    children: 
                    [
                        {
                            title: "Chrome",
                            icon: "chrome",
                            children: 
                            [
                                
                            ]
                        },
                        {
                            title: "Chrome Canary",
                            icon: "chrome",
                            children: 
                            [
                                
                            ]
                        },
                        {
                            title: "Chromium",
                            icon: "chrome",
                            children: 
                            [
                                
                            ]
                        }
                    ]
                },
                {
                    title: "Firefox",
                    icon: "firefox",
                    children: []
                },
                {
                    title: "Internet Explorer",
                    icon: "internet-explorer",
                    children: []
                },
                {
                    title: "Edge",
                    icon: "edge",
                    children: []
                }
            ]
        }
    }
    public ngOnInit() : void
    {
        
    }
    public onToggleInputs(value:boolean) : void
    {
        this._inputsVisible = value;
    }
    public onToggleTreeView(value:boolean) : void
    {
        this._treeViewVisible = value;
    }
    public onTreeViewSelect(node:any) : void
    {
        console.log(node);
    }
}
