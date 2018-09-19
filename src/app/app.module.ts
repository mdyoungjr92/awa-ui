import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AwaMaterialModule } from 'modules/awa-material/awa-material.module';

import { LandSearchComponent } from 'components/land-search/land-search.component';
import { LandSearchResultsComponent } from './components/land-search-results/land-search-results/land-search-results.component';
import { LandReservationComponent } from './components/land-reservation/land-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    LandSearchComponent,
    LandSearchResultsComponent,
    LandReservationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AwaMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
