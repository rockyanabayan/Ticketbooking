import { EmailValidator } from "@angular/forms";

export default class Bookflight{
    oneWay:string='';
    roundTrip:string='';
    airlineName:string='';
    name:string='';
    email:string='';
    from:string='';
    to:string='';
    onwardJourney:Date=new Date();
    returnJourney:Date=new Date();
    airlineLogo:string='';
    discountCode:string='';
    onwardSeat:string='';
    returnSeat:string='' ; 
   
    mealPreference:string='';
   price:number=0;
    selectSeat:string='' ;  
}
    