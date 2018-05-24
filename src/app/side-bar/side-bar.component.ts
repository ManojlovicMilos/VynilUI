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
    private _inputPasswordValue:string;
    private _inputCheckValue:boolean;
    private _inputToggleValue:boolean;
    private _inputRadioValue:string;
    private _inputRadioOptions:any[];
    private _inputSelectValue:string;
    private _inputSelectOptions:any[];
    private _inputDateValue:string;
    private _inputColorValue:string;
    private _inputVectorValue:any;
    private _inputsVisible:boolean;
    private _basicInputsVisible:boolean;
    private _advancedInputsVisible:boolean;
    private _treeViewVisible:boolean;
    private _treeViewData:any;
    private _treeViewIcons:boolean;
    private _treeViewToggleable:boolean;
    public get inputTextValue():string { return this._inputTextValue; }
    public set inputTextValue(value:string) { this._inputTextValue = value; }
    public get inputNumericValue():number { return this._inputNumericValue; }
    public set inputNumericValue(value:number) { this._inputNumericValue = value; }
    public get inputPasswordValue():string { return this._inputPasswordValue; }
    public set inputPasswordValue(value:string) { this._inputPasswordValue = value; }
    public get inputCheckValue():boolean { return this._inputCheckValue; }
    public set inputCheckValue(value:boolean) { this._inputCheckValue = value; }
    public get inputToggleValue():boolean { return this._inputToggleValue; }
    public set inputToggleValue(value:boolean) { this._inputToggleValue = value; }
    public get inputRadioValue():string { return this._inputRadioValue; }
    public set inputRadioValue(value:string) { this._inputRadioValue = value; }
    public get inputRadioOptions():any[] { return this._inputRadioOptions; }
    public get inputSelectValue():string { return this._inputSelectValue; }
    public set inputSelectValue(value:string) { this._inputSelectValue = value; }
    public get inputSelectOptions():any[] { return this._inputSelectOptions; }
    public get inputDateValue():string { return this._inputDateValue; }
    public set inputDateValue(value:string) { this._inputDateValue = value; }
    public get inputColorValue():string { return this._inputColorValue; }
    public set inputColorValue(value:string) { this._inputColorValue = value; }
    public get inputVectorValue():any { return this._inputVectorValue; }
    public set inputVectorValue(value:any) { this._inputVectorValue = value; }
    public get inputsVisible():boolean { return this._inputsVisible; }
    public get basicInputsVisible():boolean { return this._basicInputsVisible; }
    public get advancedInputsVisible():boolean { return this._advancedInputsVisible; }
    public get treeViewVisible():boolean { return this._treeViewVisible; }
    public get treeViewData():any { return this._treeViewData; }
    public get treeViewIcons():boolean { return this._treeViewIcons; }
    public set treeViewIcons(value:boolean) { this._treeViewIcons = value; }
    public get treeViewToggleable():boolean { return this._treeViewToggleable; }
    public set treeViewToggleable(value:boolean) { this._treeViewToggleable = value; }
    public constructor()
    {
        this._inputTextValue = "Some Text";
        this._inputNumericValue = 123456;
        this._inputPasswordValue = "Secret";
        this._inputCheckValue = true;
        this._inputToggleValue = false;
        this._inputRadioValue = "One";
        this._inputRadioOptions = [{value:"One",title:"Uno"}, {value:"Two",title:"Dos"}, {value:"Three",title:"Tres"}];
        this._inputSelectValue = "Two";
        this._inputSelectOptions = [{value:"One",title:"Uno"}, {value:"Two",title:"Dos"}, {value:"Three",title:"Tres"}];
        this._inputDateValue = "2018-05-14";
        this._inputColorValue = "#ffffff";
        this._inputVectorValue = {X:1, Y:2, Z:3};
        this._inputsVisible = true;
        this._basicInputsVisible = true;
        this._advancedInputsVisible = false;
        this._treeViewVisible = true;
        this._treeViewIcons = true;
        this._treeViewToggleable = true;
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
    public onToggleBasicInputs(value:boolean) : void
    {
        this._basicInputsVisible = value;
    }
    public onToggleAdvancedInputs(value:boolean) : void
    {
        this._advancedInputsVisible = value;
    }
    public onToggleTreeView(value:boolean) : void
    {
        this._treeViewVisible = value;
    }
    public onTreeViewSelect(node:any) : void
    {
        console.log(node);
    }
    public onButtonClick()
    {
        console.log("Click!");
    }
}
