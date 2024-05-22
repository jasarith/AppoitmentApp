import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  doctorsList = [
    {
      doctorName: 'Dr.A. SaiBaba Goud', designation: 'MBBS, MS - Ophthalmology', specializations: 'Ophthalmologist/ Eye Surgeon',
      exp: '20 Years Experience Overall', image: 'assets/images/saibaba.jpg', slots: '0'
    },
    {
      doctorName: 'Dr.Prashanth Hegde', designation: 'MBBS, MS - Genaral Surgery', specializations: 'General Surgeon,Laparoscopic Surgeon',
      exp: '23 Years Experience Overall', image: 'assets/images/prashanthH.jpg', slots: '0'
    },
    {
      doctorName: 'Dr. K. Suma', designation: 'MBBS, DGO, MD - Obstetrics & Gynaecology', specializations: 'Infertility Specialist,Gynecologist,Obstetrician,Laparoscopic Surgeon (Obs & Gyn)',
      exp: '36 Years Experience Overall', image: 'assets/images/suma.jpg', slots: '0'
    }

  ];
  public doctorsData = new BehaviorSubject('');
  public detailsData = new BehaviorSubject('');
  bookingDetails: any = [];
  constructor() { }
  isEmptyVal(val: any) {
    if (val == 'undefined' || val == undefined || val == '' || val == 'null' || val == null) {
      return true;
    } else {
      return false;
    }
  }
}
