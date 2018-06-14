import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MonacoFile } from 'ngx-monaco';

@Component({
  selector: 'vynil-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit
{
    @Input() fileData:string;
    @Input() fileType:string;
    @Input() fileAdress:string;
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
            uri: (this.fileAdress) || "file.js",
            language: (this.fileType) || "javascript",
            content: (this.fileData) || ""
        };
    }
    public onFileChange(file: MonacoFile) : void
    {
        this.fileChanged.emit(file.content);
    }
}