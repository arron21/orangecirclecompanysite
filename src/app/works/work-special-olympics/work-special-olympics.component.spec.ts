import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSpecialOlympicsComponent } from './work-special-olympics.component';

describe('WorkSpecialOlympicsComponent', () => {
  let component: WorkSpecialOlympicsComponent;
  let fixture: ComponentFixture<WorkSpecialOlympicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSpecialOlympicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSpecialOlympicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
