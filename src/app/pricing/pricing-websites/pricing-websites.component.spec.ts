import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingWebsitesComponent } from './pricing-websites.component';

describe('PricingWebsitesComponent', () => {
  let component: PricingWebsitesComponent;
  let fixture: ComponentFixture<PricingWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
