import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { InputComponent } from "./../input/input.component";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const VECTOR_INPUT_ACCESSOR: any =
{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => VectorInputComponent),
    multi: true
};

@Component({
    selector: 'vynil-vector-input',
    templateUrl: './vector-input.component.html',
    styleUrls: ['./vector-input.component.scss'],
    providers: [VECTOR_INPUT_ACCESSOR]
})
export class VectorInputComponent extends InputComponent implements OnInit
{
    @Input() min:number;
    @Input() max:number;
    @Input() step:number;
    @Input() planar:boolean;
    ngOnInit()
    {
        super.ngOnInit();
    }
}