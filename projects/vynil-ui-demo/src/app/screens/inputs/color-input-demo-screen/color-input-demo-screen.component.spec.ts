import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorInputDemoScreenComponent } from './color-input-demo-screen.component';

describe('ColorInputDemoScreenComponent', () => {
  let component: ColorInputDemoScreenComponent;
  let fixture: ComponentFixture<ColorInputDemoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorInputDemoScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorInputDemoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
