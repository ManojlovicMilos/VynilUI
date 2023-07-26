import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VynilUiComponent } from './vynil-ui.component';

describe('VynilUiComponent', () => {
  let component: VynilUiComponent;
  let fixture: ComponentFixture<VynilUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VynilUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VynilUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
