import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDemoScreenComponent } from './view-demo-screen.component';

describe('ViewDemoScreenComponent', () => {
    let component: ViewDemoScreenComponent;
    let fixture: ComponentFixture<ViewDemoScreenComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ViewDemoScreenComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ViewDemoScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
