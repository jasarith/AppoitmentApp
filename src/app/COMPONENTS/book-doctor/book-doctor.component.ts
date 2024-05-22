import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SERVICES/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-doctor',
  templateUrl: './book-doctor.component.html',
  styleUrls: ['./book-doctor.component.css']
})
export class BookDoctorComponent implements OnInit {
  minimumDate = new Date().toISOString().split('T')[0];

  bookForm: FormGroup;
  errorMessage: string = '';
  availablityTimings: any = [
    { time: '10:00AM-10:30AM', val: 'A' },
    { time: '10:30AM-11:00AM', val: 'B' },
    { time: '11:00AM-11:30AM', val: 'C' },
    { time: '11:30AM-12:00AM', val: 'D' },
    { time: '12:00AM-12:30AM', val: 'E' },
    { time: '12:30AM-01:00PM', val: 'F' },
    { time: '01:00PM-01:30PM', val: 'G' },
    { time: '01:30PM-02:00PM', val: 'H' },
    { time: '02:00PM-02:30PM', val: 'I' },
    { time: '02:30PM-03:00PM', val: 'J' },
    { time: '03:00PM-03:30PM', val: 'K' },
    { time: '03:30PM-04:00PM', val: 'L' },
    { time: '04:00PM-04:30PM', val: 'M' },
    { time: '04:30PM-05:00PM', val: 'N' },
    { time: '05:00PM-05:30PM', val: 'O' },
  ];
  doctorsData: any;
  errorFlag: string = '';
  checkbookedList: any = [];
  timeflag: string = '';
  constructor(private service: SharedService, private router: Router) {
    this.bookForm = new FormGroup({
      patientName: new FormControl(''),
      date: new FormControl(''),
      timings: new FormControl(''),
      description: new FormControl(''),
    });
  }
  ngOnInit() {
    this.service.doctorsData.subscribe(res => {
      // console.log('recieved Doctors List', res);
      this.doctorsData = res;
    });
    // console.log(this.service.bookingDetails);
    this.service.detailsData.subscribe(res => {
      console.log('bok= ====>', res);
      this.checkbookedList = res;
    })
  }
  bookAppointment(data: any) {
    console.log('data==>', data);
    if (this.doctorsData != '') {
      data['doctorsName'] = this.doctorsData['doctorName'];
      if (this.service.isEmptyVal(data.patientName) || this.service.isEmptyVal(data.date) ||
        this.service.isEmptyVal(data.timings) || this.service.isEmptyVal(data.description)) {
        this.errorMessage = "Fileds can't be Blank";
        this.errorFlag = '';
      } else {
        this.errorMessage = '';


        // this.router.navigate(['/bookingDetails'])
        if (this.checkbookedList?.length > 0 && this.checkbookedList != '') {
          let a: any = [];
          a = this.checkbookedList.filter((x: any) => x.doctorsName == data.doctorsName && x.timings['val'] == data.timings['val']
            && new Date(x.date).getTime() == new Date(data.date).getTime())
          console.log('a==>', a);
          if (a.length > 0) {
            this.timeflag = 'Slot is not avialble at this time.Please selct differnt Time slot'
          } else {
            this.timeflag = ''
            console.log('11');
            this.service.bookingDetails.push(data);
            Swal.fire(
              'Booking Sucess!',
              data.patientName.toUpperCase() + ' Appointment is confirmed for ' + data.date + ' at ' + data.timings['time'],

            ).then((result) => {
              // console.log('sweet popup', result.value);
              if (result.value) {
                this.router.navigate(['/bookingDetails'])

              }
            });
          }

        } else {
          this.timeflag = '';
          console.log('2222');
          this.service.bookingDetails.push(data);
          Swal.fire(
            'Booking Sucess!',
            data.patientName.toUpperCase() + ' Appointment is confirmed for ' + data.date + ' at ' + data.timings['time'],

          ).then((result) => {

            if (result.value) {
              this.router.navigate(['/bookingDetails'])

            }
          });
        }

      }
    } else {
      this.errorFlag = 'Please select a  Doctor. go to Book Appointment Page'

    }
  }
  isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
  }
}
