import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../model/car';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient) { }
  apiUrl: string = "https://freeapi.miniprojectideas.com/api/CarRentalApp";
  getAllBookings() {
    return this.http.get<APIResponse>(this.apiUrl + '/geAllBookings');
  }
  getAllCars() {
    return this.http.get<APIResponse>(this.apiUrl + '/GetCars');
  }
  saveNewBooking(obj: any) {
    return this.http.post(this.apiUrl + "/CreateNewBooking", obj)
  }

}
