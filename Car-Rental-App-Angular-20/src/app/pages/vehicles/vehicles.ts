import { Component, inject } from '@angular/core';
import { APIResponse, CarModel } from '../../model/car';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Authservice } from '../../auth/service/authservice';
import { Vehicleservice } from '../../service/vehicleservice';

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
  carList!: CarModel[];
  isLoggedIn:boolean = false;

  authService = inject(Authservice);
  vehicleService = inject(Vehicleservice);
  

  constructor() {
    this.newCarObj = new CarModel();
  }
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.getAllCars();
  }
  getAllCars() {
    this.vehicleService.getCars().subscribe({
      next: (res: APIResponse) => {
        this.carList = res.data;
      }
    })

  }
  onSaveCar() {
    this.vehicleService.createNewCar(this.newCarObj).subscribe({
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
    this.vehicleService.updateCar(this.newCarObj).subscribe({
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
    this.vehicleService.deleteCar(id).subscribe({
      next: (res: APIResponse) => {
        alert("Car Deleted !!");
        this.getAllCars();
      },
      error: (err: APIResponse) => {

      }
    })
  }

}
