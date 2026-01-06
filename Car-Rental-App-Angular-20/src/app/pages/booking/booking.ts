import { Component, inject, OnInit } from '@angular/core';
import { BookingService } from '../../service/booking';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { APIResponse } from '../../model/car';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking implements OnInit {
  bookingSrv = inject(BookingService);
  bookingForm: FormGroup = new FormGroup({
    customerName: new FormControl(''),
    customerCity: new FormControl(''),
    mobileNo: new FormControl(''),
    email: new FormControl(''),
    bookingId: new FormControl(0),
    carId: new FormControl(''),
    bookingDate: new FormControl(''),
    discount: new FormControl(0),
    totalBillAmount: new FormControl(0),
  })
  carList: any[] = [];
  bookingList: any[] = []

  ngOnInit(): void {
    this.getBookingList();
    this.getCarList();
    
  }

  getCarList(){
    this.bookingSrv.getAllCars().subscribe((res: APIResponse) => {
      this.carList = res.data;
    });
  }
  getBookingList(){
    this.bookingSrv.getAllBookings().subscribe((res: APIResponse) => {
      this.bookingList = res.data;
    })
  }
  saveBooking() {
    const bookingFormVal = this.bookingForm.value;
    this.bookingSrv.saveNewBooking(bookingFormVal).subscribe((res:any)=>{
      if(res.result){
        alert(res.message);
        this.getBookingList();
      }
    });
  }
}
