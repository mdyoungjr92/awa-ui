import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Season } from 'domain/season';

@Injectable({
  providedIn: 'root'
})
export class LandReservationDataService {

  private selectedSeasonsSource = new BehaviorSubject<Season[]>(new Array());
  selectedSeasons = this.selectedSeasonsSource.asObservable();

  private landSearchCriteriaSource = new BehaviorSubject('');
  landSearchCriteria = this.landSearchCriteriaSource.asObservable();

  constructor() { }

  changeSelectedSeasonsData(selectedSeasons: Season[]) {
    this.selectedSeasonsSource.next(selectedSeasons);
  }

  changeLandSearchCriteria(searchCriteria: string) {
    this.landSearchCriteriaSource.next(searchCriteria);
  }
}
