import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandSearchComponent } from 'components/land-search/land-search.component';
import { LandReservationComponent } from 'components/land-reservation/land-reservation.component';

const routes: Routes = [
  { path: 'land-search', component: LandSearchComponent },
  { path: 'reserve', component: LandReservationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
