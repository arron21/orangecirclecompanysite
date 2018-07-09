import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtSquareComponent } from './art-square.component';

describe('ArtSquareComponent', () => {
  let component: ArtSquareComponent;
  let fixture: ComponentFixture<ArtSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
