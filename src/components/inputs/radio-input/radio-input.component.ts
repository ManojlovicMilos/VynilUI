import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { InputComponent } from "./../input/input.component";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const RADIO_INPUT_ACCESSOR: any =
{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioInputComponent),
    multi: true
};

@Component({
    selector: 'vynil-radio-input',
    templateUrl: './radio-input.component.html',
    styleUrls: ['./radio-input.component.scss'],
    providers: [RADIO_INPUT_ACCESSOR]
})
export class RadioInputComponent extends InputComponent implements OnInit
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
}