import { TestBed } from '@angular/core/testing';

import { LandReservationDataService } from './land-reservation-data-service.service';

describe('LandReservationDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandReservationDataService = TestBed.get(LandReservationDataService);
    expect(service).toBeTruthy();
  });
});
