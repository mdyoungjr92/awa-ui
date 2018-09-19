import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandSearchResultsComponent } from './land-search-results.component';

describe('LandSearchResultsComponent', () => {
  let component: LandSearchResultsComponent;
  let fixture: ComponentFixture<LandSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
