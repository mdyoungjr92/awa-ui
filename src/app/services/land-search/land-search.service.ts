import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Season } from 'domain/season';
import { AvailableLandContainer } from 'domain/available-land-container';

import { AVAILABLE_LAND } from 'mock/mocks';

@Injectable({
  providedIn: 'root'
})
export class LandSearchService {

  constructor() { }

  search(searchStr: string, seasons: Season[]) : Observable<AvailableLandContainer[]> {
      return of (AVAILABLE_LAND);
  }

}
