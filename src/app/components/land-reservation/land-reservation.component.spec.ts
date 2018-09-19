import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandReservationComponent } from './land-reservation.component';

describe('LandReservationComponent', () => {
  let component: LandReservationComponent;
  let fixture: ComponentFixture<LandReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
