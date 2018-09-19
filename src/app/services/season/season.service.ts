import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Season } from 'domain/season';
import { SEASONS } from 'mock/mocks';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor() { }

  getAvailableSeasons() : Observable<Season[]> {
    return of(SEASONS);
  }
}
