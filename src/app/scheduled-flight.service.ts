import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ScheduledFlight } from './scheduled-flight.model';


@Injectable({
  providedIn: 'root'
})
export class ScheduledFlightService {
 
  constructor(private http: HttpClient) { }

  addScheduleFlight(scheduleFlight:ScheduledFlight,srcAirport,dstnAirport,deptDateTime,arrDateTime){
    let form=new FormData();
    form.append("scheduleFlightId", String(scheduleFlight.scheduleFlightid))
    form.append("availableSeats",String(scheduleFlight.availableSeats))
    form.append("flight",String(scheduleFlight.flight))
    form.append("schedule",String(scheduleFlight.schedule));
    
    let params = new HttpParams()
    .set('srcAirport', srcAirport)
    .set('dstnAirport', dstnAirport)
    .set('deptDateTime', deptDateTime)
    .set('arrDateTime', arrDateTime);
 
    console.log(scheduleFlight);
    console.log(params.toString());

    return this.http.post('http://localhost:8087/scheduledFlight/add?',form,{params});
  
}
}
  

