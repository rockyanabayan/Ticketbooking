import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { ManageAirlineComponent } from './manage-airline/manage-airline.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { ManageDiscountComponent } from './manage-discount/manage-discount.component';
import { ManageSchedulesComponent } from './manage-schedules/manage-schedules.component';
import { ReportsComponent } from './reports/reports.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { UserComponent } from './user/user.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'user', component:UserComponent},
  {path:'admin/register', component:ManageAirlineComponent},
  {path:'admin/schedules', component:ManageSchedulesComponent},
  {path:'admin/manage-discount', component:ManageDiscountComponent},
  {path:'admin/reports', component:ReportsComponent},
  {path:'user/book-flight', component:BookFlightComponent},
  {path:'user/manage-bookings', component:ManageBookingComponent},
  {path:'user/booking-history', component:BookingHistoryComponent},
  {path:'user/searchResult', component:BookingHistoryComponent},
  {path:'scheduleDetails', component:UpdateScheduleComponent},
  {path:'cancel', component:CancelTicketComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    UserComponent,
    AdminComponent,
    ManageAirlineComponent,
    ManageSchedulesComponent,
    ManageDiscountComponent,
    ReportsComponent,
    BookFlightComponent,
    ManageBookingComponent,
    BookingHistoryComponent,
    SearchResultComponent,
    UpdateScheduleComponent,
    CancelTicketComponent
  ]
})
export class AppRoutingModule { }
export const routingComponents = [AdminComponent,UserComponent,ManageAirlineComponent,
  ManageSchedulesComponent,ManageDiscountComponent,ReportsComponent,BookFlightComponent,
  ManageBookingComponent,BookingHistoryComponent,UpdateScheduleComponent]
