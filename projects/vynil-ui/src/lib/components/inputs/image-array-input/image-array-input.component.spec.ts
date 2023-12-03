import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageArrayInputComponent } from './image-array-input.component';

describe('ImageArrayInputComponent', () => {
    let component: ImageArrayInputComponent;
    let fixture: ComponentFixture<ImageArrayInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ImageArrayInputComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ImageArrayInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
