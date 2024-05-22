import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPatientDetailsComponent } from './booking-patient-details.component';

describe('BookingPatientDetailsComponent', () => {
  let component: BookingPatientDetailsComponent;
  let fixture: ComponentFixture<BookingPatientDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingPatientDetailsComponent]
    });
    fixture = TestBed.createComponent(BookingPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
