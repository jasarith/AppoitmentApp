import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SERVICES/shared.service';

@Component({
  selector: 'app-booking-patient-details',
  templateUrl: './booking-patient-details.component.html',
  styleUrls: ['./booking-patient-details.component.css']
})
export class BookingPatientDetailsComponent implements OnInit {
  bookingData: any = []
  bookingDoctorsdata: any;

  constructor(private service: SharedService) {

  } ngOnInit() {
    this.bookingData = this.service.bookingDetails;
    // console.log('==>', this.bookingData);

    this.service.detailsData.next(this.bookingData)
  }
}
