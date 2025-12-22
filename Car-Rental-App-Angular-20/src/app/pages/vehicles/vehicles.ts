import { Component, inject } from '@angular/core';
import { APIResponse, CarModel } from '../../model/car';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  imports: [FormsModule, CommonModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})
export class Vehicles {

  newCarObj: CarModel;
  // http!:HttpClient;
  http = inject(HttpClient);
  createNewCarApiUrl = 'https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar';
  getAllCarsApiUrl = 'https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars';
  updateCarApiUrl = 'https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar';
  deleteCarApiUrl = 'https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid='
  carList!: CarModel[];


  constructor() {
    this.newCarObj = new CarModel();
  }
  ngOnInit(): void {
    this.getAllCars();
  }
  getAllCars() {
    this.http.get<APIResponse>(this.getAllCarsApiUrl).subscribe({
      next: (res: APIResponse) => {
        this.carList = res.data;
      }
    })
  }
  onSaveCar() {
    this.http.post<APIResponse>(this.createNewCarApiUrl, this.newCarObj).subscribe({
      next: (res: APIResponse) => {
        if (res.result) {
          alert("Vehicle creation success!!")
          this.getAllCars();
        }
        else {
          alert(res.message);
        }
      },
      error: (err) => {

      }
    })
  }
  onEdit(carData: CarModel) {
    this.newCarObj = carData;
  }
  onUpdateCar() {
    this.http.put<APIResponse>(this.updateCarApiUrl, this.newCarObj).subscribe({
      next: (res: APIResponse) => {
        alert("Car info updated !!")
        this.newCarObj = res.data;
        this.getAllCars();
      },
      error: (err: APIResponse) => {

      }
    })
  }
  onDeleteCarById(id: number) {
    this.http.delete<APIResponse>(this.deleteCarApiUrl + id).subscribe({
      next: (res: APIResponse) => {
        alert("Car Deleted !!");
        this.getAllCars();
      },
      error: (err: APIResponse) => {

      }
    })
  }

}
