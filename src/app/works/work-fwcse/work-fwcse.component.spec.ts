import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFwcseComponent } from './work-fwcse.component';

describe('WorkFwcseComponent', () => {
  let component: WorkFwcseComponent;
  let fixture: ComponentFixture<WorkFwcseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkFwcseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFwcseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
