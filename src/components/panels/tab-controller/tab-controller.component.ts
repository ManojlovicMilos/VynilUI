import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'vynil-tab-controller',
    templateUrl: './tab-controller.component.html',
    styleUrls: ['./tab-controller.component.scss']
})
export class TabControllerComponent implements OnInit
{
    @Input() tabs:any[];
    @Input() guide:any;
    @Output() changed:EventEmitter<any>;
    private _draggedTab:any;
    public constructor() 
    {
        this.changed = new EventEmitter<any>();
    }
    public ngOnInit() { }
    public onSelect(value:any) : void
    {
        this.deselectTabs(value);
        this.changed.emit(value);
    }
    public onDrag(tab:any)
    {
        this._draggedTab = tab;
    }
    public onDrop()
    {
        this._draggedTab = null;
    }
    public onDragged(element:any)
    {
        if(element == this._draggedTab) return;
        if(this._draggedTab)
        {
            if(element == null)
            {
                this.tabs.splice(this.tabs.indexOf(this._draggedTab), 1);
                this.tabs.push(this._draggedTab);
            }
            else
            {
                let index:number = this.tabs.indexOf(element);
                this.tabs.splice(this.tabs.indexOf(this._draggedTab), 1);
                this.tabs.splice(index, 0, this._draggedTab);
            }
        }
    }
    private deselectTabs(exclude:any)
    {
        for(let i in this.tabs)
        {
            let cTab = this.tabs[i];
            if(cTab == exclude) continue;
            if(typeof cTab == "string") break;
            else if(this.guide) cTab[this.guide.selected] = false;
            else cTab.selected = false;
        }
    }
}