import { Component, OnInit } from '@angular/core';
import Bookflight from '../entity/Bookflight';
import BookingService from '../service/BookingService';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.sass']
})
export class CancelTicketComponent implements OnInit {

  constructor(private bookingService: BookingService) { }
  bookFlight: Bookflight = new Bookflight(); //state
  bookFlights: Bookflight[] = []; //state

  ngOnInit(): void {
  }
  cancelTicket(){
    
    const element2= document.getElementById("email");
    const email = ( element2 as HTMLInputElement).value;
    
   
    const promise = this.bookingService.cancelTicket(email);
    promise.subscribe((response) => {
      console.log(response);
      alert('successfully canceld ticket')
    });

  }

}
