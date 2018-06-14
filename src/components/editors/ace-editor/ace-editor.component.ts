import { Input, Output, EventEmitter, Component } from '@angular/core';

@Component(
{
    selector: 'vynil-ace-editor',
    templateUrl: './ace-editor.component.html',
    styleUrls: ['./ace-editor.component.scss']
})
export class AceEditorComponent
{
    @Input() fileData:string;
    @Input() fileType:string;
    @Output() fileChanged:EventEmitter<string>;
    private _options:any;
    public get options():any { return this._options; }
    public constructor() 
    {
        this._options  = { theme: 'vs-dark', language: 'javascript' };
        this.fileChanged = new EventEmitter<any>();
    }
    private ngOnInit() : void { }
    public onFileChange(data: string) : void
    {
        this.fileChanged.emit(data);
    }
}
