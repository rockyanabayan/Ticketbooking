import { Component, OnInit } from '@angular/core';
import Airline from '../entity/Airline';
import UserService from '../service/UserService';

@Component({
  selector: 'app-manage-schedules',
  templateUrl: './manage-schedules.component.html',
  styleUrls: ['./manage-schedules.component.sass']
})
export class ManageSchedulesComponent implements OnInit {

  constructor(private airlineService: UserService) { }
  airline: Airline = new Airline(); //state
  airlines: Airline[] = []; //state
  ngOnInit(){
    const promise= this.airlineService.getUsers();
    promise.subscribe((response) =>{
      console.log(response);
      this.airlines= response as Airline[];
    })

  }
  searchAirline(){
    const element1= document.getElementById("selectairline");
    const airlineName = ( element1 as HTMLInputElement).value;
    const element2= document.getElementById("flightNumberAirline");
    const flightNumber = ( element1 as HTMLInputElement).value;
    if(!airlineName)
      return;
    const promise = this.airlineService.getAirlineDetails(airlineName,flightNumber);
    promise.subscribe((response) => {
      this.airlines= response as Airline[];
    });
  }
}
