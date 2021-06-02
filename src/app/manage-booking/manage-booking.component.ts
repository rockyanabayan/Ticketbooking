import { Component, OnInit } from '@angular/core';
import Bookflight from '../entity/Bookflight';
import BookingService from '../service/BookingService';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.sass']
})
export class ManageBookingComponent implements OnInit {

  constructor(private bookingService: BookingService) { }
  bookFlight: Bookflight = new Bookflight(); //state
  bookFlights: Bookflight[] = []; //state
  ngOnInit(){
    const promise= this.bookingService.getBookingDetails();
    promise.subscribe((response) =>{
      console.log(response);
      this.bookFlights= response as Bookflight[];
    })

  }

}
