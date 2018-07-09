import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCodeComponent } from './pricing-code.component';

describe('PricingCodeComponent', () => {
  let component: PricingCodeComponent;
  let fixture: ComponentFixture<PricingCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
