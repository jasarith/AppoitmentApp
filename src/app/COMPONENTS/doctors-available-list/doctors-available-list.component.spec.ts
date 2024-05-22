import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsAvailableListComponent } from './doctors-available-list.component';

describe('DoctorsAvailableListComponent', () => {
  let component: DoctorsAvailableListComponent;
  let fixture: ComponentFixture<DoctorsAvailableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsAvailableListComponent]
    });
    fixture = TestBed.createComponent(DoctorsAvailableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
