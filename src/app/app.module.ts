import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AwaMaterialModule } from 'modules/awa-material/awa-material.module';

import { LandReservationComponent } from './components/land-reservation/land-reservation.component';
import { AlertComponent } from './components/alert/alert.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from 'guards/auth-guard';
import { JwtInterceptor } from 'helpers/jwt-interceptor';
import { ErrorInterceptor } from 'helpers/error-interceptor';
import { AlertService } from 'services/alert/alert.service';
import { AuthenticationService } from 'services/authentication/authentication.service';
import { UserService } from 'services/user/user.service';

import { fakeBackendProvider } from 'mock/fake-backend';
import { LandSearchComponent } from './components/land-reservation/land-search/land-search.component';
import { LandSelectComponent } from './components/land-reservation/land-select/land-select.component';


@NgModule({
  declarations: [
    AppComponent,
    LandReservationComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    LandSearchComponent,
    LandSelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AwaMaterialModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
     AlertService,
     AuthenticationService,
     UserService,
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

     // provider used to create fake backend
     fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
  //         matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'));
  //     }
}
