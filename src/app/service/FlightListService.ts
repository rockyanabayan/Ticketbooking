import { Injectable } from "@angular/core";

import {HttpParams } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import Bookflight from "../entity/Bookflight";
import SearchedFlightDetails from "../entity/SearchedFlightDetails";


const Base_Url = "http://localhost:3000/airlinelist";
@Injectable()
export default class FlightListService{
    constructor(private http:HttpClient){ }
    getFlightDetails(){
        return this.http.get(Base_Url);
    }
    scheduleFlight(flight:SearchedFlightDetails){
        console.log(flight);
        return this.http.post(Base_Url,flight,{
            headers:{
                "content-type":"application/json"
            }
        })
    }
    getSearchedFlights(from:any,to:any,date:any) {
        return this.http.get(Base_Url+"?fromPlace="+from+'&toPlace='+to+'&startDateTime='+date);
        
        
    }
}