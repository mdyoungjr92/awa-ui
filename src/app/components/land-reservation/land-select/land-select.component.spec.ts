import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandSelectComponent } from './land-select.component';

describe('LandSelectComponent', () => {
  let component: LandSelectComponent;
  let fixture: ComponentFixture<LandSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
