import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingConsultingComponent } from './pricing-consulting.component';

describe('PricingConsultingComponent', () => {
  let component: PricingConsultingComponent;
  let fixture: ComponentFixture<PricingConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
