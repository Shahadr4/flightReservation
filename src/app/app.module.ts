import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindFlightComponent } from './component/find-flight/find-flight.component';
import { DisplayFlightComponent } from './component/display-flight/display-flight.component';
import { PassengerDtailsComponent } from './component/passenger-dtails/passenger-dtails.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReservationService } from './Services/reservation.service';

@NgModule({
  declarations: [
    AppComponent,
    FindFlightComponent,
    DisplayFlightComponent,
    PassengerDtailsComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  
    FormsModule ,

  ],
  providers: [ReservationService],
  bootstrap: [FindFlightComponent]
})
export class AppModule { }
