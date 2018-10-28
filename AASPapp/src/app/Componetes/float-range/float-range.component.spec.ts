import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatRangeComponent } from './float-range.component';

describe('FloatRangeComponent', () => {
  let component: FloatRangeComponent;
  let fixture: ComponentFixture<FloatRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
