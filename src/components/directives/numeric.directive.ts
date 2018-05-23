import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive(
{
    selector: '[numeric]'
})
export class Numeric
{
    regexStr = '^[0-9]*$';
    constructor(private el: ElementRef) { } 
    @Input() OnlyNumber: boolean;
    @HostListener('keydown', ['$event']) onKeyDown(event)
    {
        let e = <KeyboardEvent> event;
        if (this.OnlyNumber)
        {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            (e.keyCode == 65 && e.ctrlKey === true) ||
            (e.keyCode == 67 && e.ctrlKey === true) ||
            (e.keyCode == 86 && e.ctrlKey === true) ||
            (e.keyCode == 88 && e.ctrlKey === true) ||
            (e.keyCode >= 35 && e.keyCode <= 39)) return;

            let ch = String.fromCharCode(e.keyCode);
            let regEx =  new RegExp(this.regexStr);    
            if(regEx.test(ch)) return;
            else e.preventDefault();
        }
    }
}