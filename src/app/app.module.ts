import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirportDetailsComponent } from './airport-details/airport-details.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { CommonModule } from '@angular/common';


@NgModule({
  
  
  declarations: [
    AppComponent,
    AddScheduledFlightComponent,
    AirportDetailsComponent,
    FlightDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
