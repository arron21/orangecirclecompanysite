import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAslaLandComponent } from './work-asla-land.component';

describe('WorkAslaLandComponent', () => {
  let component: WorkAslaLandComponent;
  let fixture: ComponentFixture<WorkAslaLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAslaLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAslaLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
