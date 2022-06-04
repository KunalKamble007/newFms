import { Component, OnInit } from '@angular/core';
import { Airport } from '../airport.model';

@Component({
  selector: 'app-airport-details',
  templateUrl: './airport-details.component.html',
  styleUrls: ['./airport-details.component.css']
})
export class AirportDetailsComponent implements OnInit {

  airportCode: string;
  airport:Airport;
  
  constructor() { }

  ngOnInit(): void {
  }

}
