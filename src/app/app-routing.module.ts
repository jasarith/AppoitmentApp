import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsAvailableListComponent } from './COMPONENTS/doctors-available-list/doctors-available-list.component';
import { BookDoctorComponent } from './COMPONENTS/book-doctor/book-doctor.component';
import { BookingPatientDetailsComponent } from './COMPONENTS/booking-patient-details/booking-patient-details.component';

const routes: Routes = [
  { path: '', component: DoctorsAvailableListComponent },
  { path: 'doctorsPage', component: DoctorsAvailableListComponent },
  { path: 'bookAppointment', component: BookDoctorComponent },
  { path: 'bookingDetails', component: BookingPatientDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
