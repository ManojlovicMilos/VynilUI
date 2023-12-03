import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DownloadService {
    public downloadJSON(fileName: string, dataJSON: string): void {
        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL( new Blob([dataJSON], { type:'text/json' }) );
        anchor.download = fileName + '.json';
        anchor.click();
    }
}
