import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAbbottTechnologiesComponent } from './work-abbott-technologies.component';

describe('WorkAbbottTechnologiesComponent', () => {
  let component: WorkAbbottTechnologiesComponent;
  let fixture: ComponentFixture<WorkAbbottTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAbbottTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAbbottTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
