import { Airport } from './airport.model';



export class Schedule {
    scheduleid!: number;
    srcAirport: Airport;
    dstnAirport: Airport;
    deptDateTime!: string;
    arrDateTime!: string;
}
