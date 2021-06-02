import { Component, OnInit } from '@angular/core';
import Bookflight from '../entity/Bookflight';
import BookingService from '../service/BookingService';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.sass']
})
export class BookingHistoryComponent implements OnInit {

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
