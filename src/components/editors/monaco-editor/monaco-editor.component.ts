import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MonacoFile } from 'ngx-monaco';

@Component({
  selector: 'vynil-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss']
})
export class MonacoEditorComponent implements OnInit
{
    @Input() fileData:string;
    @Input() fileType:string;
    @Output() fileChanged:EventEmitter<string>;
    private _file:MonacoFile;
    public get file(): MonacoFile { return this._file; }
    public constructor()
    {
        this.fileChanged = new EventEmitter<string>();
    }
    public ngOnInit() : void
    {
        this._file =
        {
            uri: "file.js",
            language: (this.fileType) || "javascript",
            content: (this.fileData) || ""
        };
    }
    public onFileChange(file: MonacoFile) : void
    {
        this.fileChanged.emit(file.content);
    }
}