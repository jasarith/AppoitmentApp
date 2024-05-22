import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { BookDoctorComponent } from './COMPONENTS/book-doctor/book-doctor.component';
import { SharedService } from './SERVICES/shared.service';
import { DoctorsAvailableListComponent } from './COMPONENTS/doctors-available-list/doctors-available-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingPatientDetailsComponent } from './COMPONENTS/booking-patient-details/booking-patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookDoctorComponent,
    DoctorsAvailableListComponent,
    BookingPatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
