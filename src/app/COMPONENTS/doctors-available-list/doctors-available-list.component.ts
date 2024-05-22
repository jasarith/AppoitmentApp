import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SERVICES/shared.service';

@Component({
  selector: 'app-doctors-available-list',
  templateUrl: './doctors-available-list.component.html',
  styleUrls: ['./doctors-available-list.component.css']
})
export class DoctorsAvailableListComponent implements OnInit {

  doctorsList: any = [];
  bookingSlots: any = [];
  slotA: any;
  slotB: any;
  slotC: any;
  constructor(private service: SharedService, private router: Router) {

  }
  ngOnInit() {
    this.doctorsList = this.service.doctorsList;
    // console.log(this.doctorsList)
    this.service.detailsData.subscribe(res => {
      console.log('docors avilblility= ====>', res);
      this.bookingSlots = res;

    })
  }
  bookAppointment(data: any) {
    // console.log(data);
    if (data) {
      this.service.doctorsData.next(data)
      this.router.navigate(["/bookAppointment"]);
    }
  }

}
