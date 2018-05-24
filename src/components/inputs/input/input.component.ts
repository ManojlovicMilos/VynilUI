import { forwardRef, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {}

export class InputComponent implements ControlValueAccessor, OnInit
{
    @Input() enabled:boolean;
    protected innerValue: any;
    protected onTouchedCallback: () => void = noop;
    protected onChangeCallback: (_: any) => void = noop;
    public get isReadonly() : boolean
    {
        if((typeof this.enabled) == 'undefined') this.enabled = true;
        return !this.enabled;
    }
    public get value(): any { return this.innerValue; };
    public set value(value: any)
    {
        if (value !== this.innerValue)
        {
            this.innerValue = value;
            this.onChangeCallback(value);
        }
    }
    public constructor()
    {
        this.innerValue = "";
    }
    public ngOnInit()
    {
    }
    public onBlur() : void
    {
        this.onTouchedCallback();
    }
    public writeValue(value: any)
    {
        if (value !== this.innerValue)
        {
            this.innerValue = value;
        }
    }
    public registerOnChange(callFunction: any) : void
    {
        this.onChangeCallback = callFunction;
    }
    public registerOnTouched(callFunction: any) : void
    {
        this.onTouchedCallback = callFunction;
    }
}
