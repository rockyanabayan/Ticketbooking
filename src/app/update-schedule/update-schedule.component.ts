import { Component, OnInit } from '@angular/core';
import Airline from '../entity/Airline';
import UserService from '../service/UserService';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.sass']
})
export class UpdateScheduleComponent implements OnInit {

  constructor(private airlineService: UserService) { }
  airline: Airline = new Airline(); //state
  airlines: Airline[] = []; //state

  ngOnInit(): void {
  }
  updateAirline(){
    const element1= document.getElementById("airlineName");
    const airlineName = ( element1 as HTMLInputElement).value;
    const element2= document.getElementById("flightNumber");
    const FlightName = ( element2 as HTMLInputElement).value;
    
    if(!airlineName)
      return;
    const promise = this.airlineService.updateAirlineDetails(airlineName,FlightName);
    promise.subscribe((response) => {
      console.log(response);
      alert('Updated Airline details')
    });
  }

}
