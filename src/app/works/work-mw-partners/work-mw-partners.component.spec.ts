import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMwPartnersComponent } from './work-mw-partners.component';

describe('WorkMwPartnersComponent', () => {
  let component: WorkMwPartnersComponent;
  let fixture: ComponentFixture<WorkMwPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkMwPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMwPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
