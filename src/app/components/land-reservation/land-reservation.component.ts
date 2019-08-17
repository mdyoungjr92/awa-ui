import { Component, ViewChild, OnInit, Input } from '@angular/core';

import { LandSearchComponent } from 'components/land-reservation/land-search/land-search.component';
import { LandSelectComponent } from './land-select/land-select.component';
import { Season } from 'domain/season';
import { ReservationContainer } from 'domain/reservation-container';

@Component({
  selector: 'app-land-reservation',
  templateUrl: './land-reservation.component.html',
  styleUrls: ['./land-reservation.component.css']
})
export class LandReservationComponent implements OnInit {

  reservationContainer: ReservationContainer = new ReservationContainer();

  ngOnInit(): void {
  }

}
