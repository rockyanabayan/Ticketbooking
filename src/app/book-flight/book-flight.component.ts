import { Component, OnInit } from '@angular/core';
import Bookflight from '../entity/Bookflight';
import BookingService from '../service/BookingService';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.sass']
})
export class BookFlightComponent implements OnInit {

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

  bookTicket(){
   console.log(this.bookFlight.discountCode);
   const promise = this.bookingService.bookFlight(this.bookFlight);    
   promise.subscribe(function(response){
     console.log(response);
     alert('ticket booking done successfully')
     
   },
   function(error){
     alert(error.message);
   },
   function(){console.log('default will always called')

   }
   )
 }
}
