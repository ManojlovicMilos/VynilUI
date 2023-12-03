import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TokenSize } from '../../../tokens/models/token.model';

const SIZES: TokenSize[] = ['S', 'M', 'L', 'XL', 'XXL'];

@Component({
    selector: 'vui-size-selector',
    templateUrl: './size-selector.component.html',
    styleUrls: ['./size-selector.component.scss'],
})
export class SizeSelectorComponent {
    @Input() selectedSize?: TokenSize;
    @Output() selected: EventEmitter<TokenSize>;

    public availableSizes: TokenSize[];

    constructor() {
        this.availableSizes = SIZES;
        this.selected = new EventEmitter<TokenSize>();
    }

    public onSelectSize(size: TokenSize): void {
        this.selected.emit(size);
    }
}
