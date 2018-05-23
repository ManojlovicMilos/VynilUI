import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vynil-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit
{
    @Input() node: any;
    @Input() guide: any;
    @Input() icon: boolean;
    @Input() toggleable: boolean;
    @Output() select: EventEmitter<any>;
    private _toggled: boolean;
    public get iconName(): string { return this.determineIcon(); }
    public get title(): string { return this.determineTitle(); }
    public get children(): string { return this.determineChildren(); }
    public get toggled(): boolean { return this._toggled; }
    public get toggleIcon(): string { if(this._toggled) return "minus-square-o"; else return "plus-square-o"; }
    public get selected(): boolean { return this.node.selected; }
    public get selectable(): boolean
    {
        if(!this.guide) return this.node.children == undefined || this.node.children.length == 0;
        else if(this.guide.selectable) return this.node[this.guide.selectable];
        else return this.node[this.guide.children] == undefined || this.node[this.guide.children].length == 0;
    }
    public constructor()
    {
        this._toggled = true;
        this.select = new EventEmitter<any>();
    }
    public ngOnInit() : void
    {
        if(this.icon == undefined) this.icon = true;
        if(this.toggleable == undefined) this.toggleable = true;
    }
    private determineIcon() : string
    {
        if(!this.guide) return this.node.icon || "cog";
        if(this.guide.iconType == "basic") return this.node[this.guide.icon] || "cog";
        else if(this.guide.iconType == "files")
        {
            let extension = this.findExtension(this.node[this.guide.fileName]);
            return this.guide.fileIcons[extension]  || "cog";
        }
    }
    private determineTitle() : string
    {
        if(!this.guide) return this.node.title  || "Unnamed";
        else return this.node[this.guide.title] || "Unnamed";
    }
    private determineChildren() : string
    {
        if(!this.guide) return this.node.children || [];
        else return this.node[this.guide.children] || [];
    }
    private findExtension(fileName:string) : string
    {
        let re = /(?:\.([^.]+))?$/;
        return re.exec(fileName)[1];
    }
    public onToggle() : void
    {
        this._toggled = !this._toggled;
    }
    public onClick() : void
    {
        if(this.selectable)
        {
            this.select.emit(this.node);
        }
        else this._toggled = !this._toggled;
    }
    public onChildSelect(node:any) : void
    {
        this.select.emit(node);
    }
}
