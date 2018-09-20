import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NestedTreeControl} from '@angular/cdk/tree';

import { Season } from 'domain/season';
import { StateSeasonContainer } from 'domain/state-season-container';
import { SeasonService } from 'services/season/season.service';

import { AvailableLandContainer } from 'domain/available-land-container';
import { Unit } from 'domain/unit';
import { LandSearchService } from 'services/land-search/land-search.service';

@Component({
  selector: 'app-land-reservation',
  templateUrl: './land-reservation.component.html',
  styleUrls: ['./land-reservation.component.css']
})
export class LandReservationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  stateSeasons: StateSeasonContainer[];
  selectedSeasons: Season[] = [];

  selectedUnits: Unit[];
  availableLand: AvailableLandContainer[];
  nestedTreeControl: NestedTreeControl<AvailableLandContainer>;

  constructor(private _formBuilder: FormBuilder,
              private seasonService: SeasonService,
              private landSearchService: LandSearchService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.seasonService.getAvailableSeasons().subscribe(stateSeasons => this.stateSeasons = stateSeasons);
  }

  onSeasonSelect(season: Season) : void {
    let idx = this.selectedSeasons.indexOf(season);
    if (idx == -1) {
      this.selectedSeasons.push(season);
    } else {
      this.selectedSeasons.splice(idx, 1);
    }
  }

  firstFormSubmit() : void {
    // get the search criteria and the selected seasons and use the land search service
    // to get a list of available units
    // use this data to populate the next form
    this.landSearchService.search(this.firstFormGroup.controls['firstCtrl'].value,
                                      this.selectedSeasons).subscribe(availableLand => this.availableLand = availableLand);
  }

}
