import { TestBed } from '@angular/core/testing';

import { LandSearchService } from './land-search.service';

describe('LandSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandSearchService = TestBed.get(LandSearchService);
    expect(service).toBeTruthy();
  });
});
