import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksHomeComponent } from './works-home.component';

describe('WorksHomeComponent', () => {
  let component: WorksHomeComponent;
  let fixture: ComponentFixture<WorksHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
