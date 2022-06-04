import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduledFlight } from '../scheduled-flight.model';

import { ScheduledFlightService } from '../scheduled-flight.service';


@Component({
  selector: 'app-add-scheduled-flight',
  templateUrl: './add-scheduled-flight.component.html',
  styleUrls: ['./add-scheduled-flight.component.css']
})
export class AddScheduledFlightComponent implements OnInit {

  srcAirport: string;
  dstnAirport: string;
  deptDateTime: string;
  arrDateTime: string;

  scheduleFlight:ScheduledFlight={scheduleFlightid:null, availableSeats:null, flight:null,schedule:null};

  constructor(private scheduleFlightService: ScheduledFlightService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addScheduleFlight(scheduleFlight,sa,da,ddt,adt){
    // alert(sa+da+ ddt+ adt);
     this.srcAirport=sa;
     this.dstnAirport=da;
     this.deptDateTime=ddt;
     this.arrDateTime=adt;
     this.scheduleFlightService['addScheduleFlight']( scheduleFlight,sa,da,ddt,adt).subscribe();
     alert("Schedule Flight added");
   }

   idValid:boolean=false;
    validateId(){
        if(this.scheduleFlight.scheduleFlightid>999){
            this.idValid=true;
        }
        else if(this.scheduleFlight.scheduleFlightid<1){
            this.idValid=true;
        }else{
            this.idValid=false;
        }
    }

    airportValid:boolean=false;
    validateAirports(a:string, b:string){
        if(a.toLowerCase()===b.toLowerCase()){
            this.airportValid=true;
        }else{
            this.airportValid=false;
        }
        this.enableButton();
  }

  buttonFlag:boolean=false;
    enableButton(){
        this.buttonFlag=!this.idValid&&!this.airportValid;
    }

    add(){

      this.router.navigate(['/scheduledFlight/add']);

  }


}
