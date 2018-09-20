import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandReservationComponent } from 'components/land-reservation/land-reservation.component';

const routes: Routes = [
  { path: 'reserve', component: LandReservationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
