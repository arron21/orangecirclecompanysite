import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCodingComponent } from './home-coding.component';

describe('HomeCodingComponent', () => {
  let component: HomeCodingComponent;
  let fixture: ComponentFixture<HomeCodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
