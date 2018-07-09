import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCopywritingComponent } from './pricing-copywriting.component';

describe('PricingCopywritingComponent', () => {
  let component: PricingCopywritingComponent;
  let fixture: ComponentFixture<PricingCopywritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingCopywritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCopywritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
