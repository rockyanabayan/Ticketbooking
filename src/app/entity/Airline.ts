export default class Airline{
    airlineName: string = '';
    uploadLogo: string = "";
    contactNumber: number = 0;
    contactAddress: string = ''; 
    flightNumber:string='';
    fromPlace:string='';
    toPlace:string='';
    startDateTime : Date=new Date();
    endDateTime : Date=new Date();
    scheduledDays: string='';
    instrumentUsed: string='';
    numberOfBusinessSeats:string='';
    numberOfNonBusinessSeats:string='';
    ticketCost:number=0;
    noOfRows:number=0;
    meal:string='';


}