import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'components/home/home.component';
import { LoginComponent } from 'components/login/login.component';
import { AuthGuard } from 'guards/auth-guard';

import { LandReservationComponent } from 'components/land-reservation/land-reservation.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'reserve', component: LandReservationComponent, canActivate: [AuthGuard] },

  // redirect all other routes back to home
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
