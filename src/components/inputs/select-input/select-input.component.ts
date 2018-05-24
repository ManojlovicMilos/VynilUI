import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { InputComponent } from "./../input/input.component";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const SELECT_INPUT_ACCESSOR: any =
{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectInputComponent),
    multi: true
};

@Component({
    selector: 'vynil-select-input',
    templateUrl: './select-input.component.html',
    styleUrls: ['./select-input.component.scss'],
    providers: [SELECT_INPUT_ACCESSOR]
})
export class SelectInputComponent extends InputComponent implements OnInit
{
    @Input() guide:any;
    @Input() options:any[];
    public ngOnInit() : void
    {
        super.ngOnInit();
        if(!this.options) this.options = [];
    }
    public getValue(option:any) : any
    {
        if(typeof option == "string") return option;
        else if(!this.guide) return option.value;
        else return option[this.guide.value];
    }
    public getTitle(option:any) : any
    {
        if(typeof option == "string") return option;
        else if(!this.guide) return option.title;
        else return option[this.guide.title];
    }
    public getSelected(option:any) : boolean
    {
        if(typeof option == "string") return this.value == option;
        else if(!this.guide) return option.selected;
        else return option[this.guide.selected];
    }
}