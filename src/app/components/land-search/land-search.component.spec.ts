import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandSearchComponent } from './land-search.component';

describe('LandSearchComponent', () => {
  let component: LandSearchComponent;
  let fixture: ComponentFixture<LandSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
