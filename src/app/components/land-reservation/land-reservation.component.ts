import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Season } from 'domain/season';
import { StateSeasonContainer } from 'domain/state-season-container';
import { SeasonService } from "services/season/season.service";
import { LandSearchService } from "services/land-search/land-search.service";


@Component({
  selector: 'app-land-reservation',
  templateUrl: './land-reservation.component.html',
  styleUrls: ['./land-reservation.component.css']
})
export class LandReservationComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  stateSeasons: StateSeasonContainer[];
  selectedSeasons: Season[] = [];

  constructor(private _formBuilder: FormBuilder,
              private seasonService: SeasonService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.seasonService.getAvailableSeasons().subscribe(stateSeasons => this.stateSeasons = stateSeasons);
  }


  isSelected(season: Season) : boolean {
    return this.selectedSeasons.indexOf(season) != -1;
  }

  onSelect(season: Season) : void {
    let idx = this.selectedSeasons.indexOf(season);
  }
}
