import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vynil-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit
{
    @Input() data:any;
    @Input() guide:any;
    @Output() tabDrag:EventEmitter<any>;
    @Output() tabDrop:EventEmitter<any>;
    @Output() tabDragged:EventEmitter<any>;
    @Output() select:EventEmitter<any>;
    public constructor()
    {
        this.tabDrag = new EventEmitter<any>();
        this.tabDrop = new EventEmitter<any>();
        this.tabDragged = new EventEmitter<any>();
        this.select = new EventEmitter<any>();
    }
    public ngOnInit()
    {
        
    }
    public getTitle() : string
    {
        if(typeof this.data == "string") return this.data || "Unknown";
        else if(this.guide) return this.data[this.guide.title] || "Unknown";
        else return this.data.title || "Unknown";
    }
    public getIconVisible() : boolean
    {
        if(typeof this.data == "string") return false;
        else if(this.guide) return this.guide.iconsVisible;
        else return this.data.icon != undefined;
    }
    public getIcon() : string
    {
        if(!this.guide) return this.data.icon || "cog";
        if(this.guide.iconType == "basic") return this.data[this.guide.icon] || "cog";
        else if(this.guide.iconType == "files")
        {
            let extension = this.findExtension(this.data[this.guide.fileName]);
            return this.guide.fileIcons[extension]  || "cog";
        }
    }
    public getSelected() : boolean
    {
        if(typeof this.data == "string") return false;
        else if(this.guide) return this.data[this.guide.selected];
        else return this.data.selected;
    }
    public onClick(event:any) : void
    {
        this.onSelect();
    }
    public onSelect() : void
    {
        if(this.guide) this.data[this.guide.selected] = true;
        else this.data.selected = true;
        this.select.emit(this.data);
    }
    public onDrag() : void
    {
        this.onSelect();
        this.tabDrag.emit(this.data);
    }
    public onDragged() : void
    {
        this.tabDragged.emit(this.data);
    }
    public onDrop() : void
    {
        this.tabDrop.emit();
    }
    private findExtension(fileName:string) : string
    {
        let re = /(?:\.([^.]+))?$/;
        return re.exec(fileName)[1];
    }
}