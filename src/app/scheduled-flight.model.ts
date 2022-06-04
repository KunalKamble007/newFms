import { Flight } from "./flight.model";
import { Schedule } from "./schedule.model";


export class ScheduledFlight {
    scheduleFlightid!: number;
    flight: Flight;
    availableSeats!: number;
    schedule: Schedule = new Schedule;
}
