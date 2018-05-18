import { Component, Input} from '@angular/core';

@Component({
  selector: 'vynil-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent
{
    @Input() node: any;
    @Input() guide: any;
    private _toggled: boolean;
    public get icon(): string { return this.determineIcon(); }
    public get title(): string { return this.determineTitle(); }
    public get children(): string { return this.determineChildren(); }
    public get toggled(): boolean { return this._toggled; }
    public get toggleIcon(): string { if(this._toggled) return "minus-square-o"; else return "plus-square-o"; }
    public constructor()
    {
        this._toggled = true;
    }
    private determineIcon() : string
    {
        if(!this.guide) return this.node.icon;
        if(this.guide.iconType == "basic") return this.node[this.guide.icon];
        else if(this.guide.iconType == "files")
        {
            let extension = this.findExtension(this.node[this.guide.fileName]);
            return this.guide.fileIcons[extension];
        }
    }
    private determineTitle() : string
    {
        if(!this.guide) return this.node.title;
        else return this.node[this.guide.title];
    }
    private determineChildren() : string
    {
        if(!this.guide) return this.node.children;
        else return this.node[this.guide.children];
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
}
