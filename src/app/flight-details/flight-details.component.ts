import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  flightNo: number;
  flight: Flight;

  constructor() { }

  ngOnInit(): void {
  }

}
