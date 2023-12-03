import { FormArray, FormControl, FormGroup } from "@angular/forms";

export type ToFormModel<T> = {
    [P in keyof T]: FormControl<T[P]>;
};
  
export type ToFormControlModel<T> = T extends Array<infer ArrayType>
    ? FormArray<ToFormControlModel<ArrayType>>
    : T extends object
        ? FormGroup<ToFormModel<T>>
        : FormControl<T | null>;

export type Form<T> = FormGroup<ToFormModel<T>>;
