import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'vynil-demo-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class DemoSideBarComponent implements OnInit
{
    private _inputTextValue:string;
    private _inputNumericValue:number;
    private _inputCheckValue:boolean;
    private _inputsVisible:boolean;
    private _treeViewVisible:boolean;
    private _treeViewData:any;
    public get inputTextValue():string { return this._inputTextValue; }
    public set inputTextValue(value:string) { this._inputTextValue = value; }
    public get inputNumericValue():number { return this._inputNumericValue; }
    public set inputNumericValue(value:number) { this._inputNumericValue = value; }
    public get inputCheckValue():boolean { return this._inputCheckValue; }
    public set inputCheckValue(value:boolean) { this._inputCheckValue = value; }
    public get inputsVisible():boolean { return this._inputsVisible; }
    public get treeViewVisible():boolean { return this._treeViewVisible; }
    public get treeViewData():any { return this._treeViewData; }
    public constructor()
    {
        this._inputTextValue = "Some Text";
        this._inputNumericValue = 123456;
        this._inputCheckValue = true;
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
