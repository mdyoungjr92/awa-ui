import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NestedTreeControl } from '@angular/cdk/tree';

import { AvailableLandContainer } from 'domain/available-land-container';
import { Unit } from 'domain/unit';
import { LandSearchService } from 'services/land-search/land-search.service';
import { LandReservationDataService } from 'services/data/land-reservation/land-reservation-data-service.service';
import { combineLatest } from 'rxjs';
import { ReservationContainer } from 'domain/reservation-container';


@Component({
  selector: 'land-select',
  templateUrl: './land-select.component.html',
  styleUrls: ['./land-select.component.css']
})
export class LandSelectComponent implements OnInit {

  public isCompleted: boolean;

  @Input() reservationContainer: ReservationContainer;

  nestedTreeControl: NestedTreeControl<AvailableLandContainer>;

  constructor(private formBuilder: FormBuilder,
              private landSearchService: LandSearchService) { }

  ngOnInit() {
    this.isCompleted = false;
  }

  selectFormSubmit() : void {
    this.isCompleted = true;
    console.log('Form submitted');
  }

}
