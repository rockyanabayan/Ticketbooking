import { Injectable } from "@angular/core";

import {HttpParams } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

import Bookflight from "../entity/Bookflight";
const Base_Url = "http://localhost:3000/bookedflights";
@Injectable()
export default class BookingService{
    constructor(private http:HttpClient){ }
    getBookingDetails(){
        return this.http.get(Base_Url);
    }
    bookFlight(flight:Bookflight){
        console.log(flight);
        return this.http.post(Base_Url,flight,{
            headers:{
                "content-type":"application/json"
            }
        })
    }
    cancelTicket(email:string)
    {
        return this.http.delete(Base_Url,{params :new HttpParams().set('email',email)})
    }
    
}