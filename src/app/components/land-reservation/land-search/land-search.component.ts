import { Component, OnInit, Input } from '@angular/core';


import { Season } from 'domain/season';
import { StateSeasonContainer } from 'domain/state-season-container';
import { SeasonService } from 'services/season/season.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LandSearchService } from 'services/land-search/land-search.service';
import { LandReservationDataService } from 'services/data/land-reservation/land-reservation-data-service.service';
import { ReservationContainer } from 'domain/reservation-container';

@Component({
  selector: 'land-search',
  templateUrl: './land-search.component.html',
  styleUrls: ['./land-search.component.css']
})
export class LandSearchComponent implements OnInit {

  public landFormGroup: FormGroup;

  stateSeasons: StateSeasonContainer[];

  @Input() reservationContainer: ReservationContainer;

  constructor(private formBuilder: FormBuilder,
              private seasonService: SeasonService,
              private landSearchService: LandSearchService) { }

  ngOnInit() {
    this.landFormGroup = this.formBuilder.group({
      firstCtrl: [this.reservationContainer.landSearchCriteria, Validators.required]
    });

    this.seasonService.getAvailableSeasons().subscribe(stateSeasons => this.stateSeasons = stateSeasons);
  }

  onSeasonSelect(season: Season) : void {
    let idx = this.reservationContainer.selectedSeasons.indexOf(season);
    if (idx == -1) {
      this.reservationContainer.selectedSeasons.push(season);
    } else {
      this.reservationContainer.selectedSeasons.splice(idx, 1);
    }
  }

  landFormSubmit() : void {
    this.reservationContainer.landSearchCriteria = this.landFormGroup.controls['firstCtrl'].value;

    console.log('Searching for: ' + this.reservationContainer.landSearchCriteria);
    
    this.landSearchService.search(this.reservationContainer.landSearchCriteria, this.reservationContainer.selectedSeasons)
                          .subscribe(availableLand => this.reservationContainer.availableLand = availableLand);

  }

}
