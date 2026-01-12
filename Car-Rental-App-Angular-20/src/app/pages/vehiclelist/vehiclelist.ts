import { Component, inject } from '@angular/core';
import { Vehicleservice } from '../../service/vehicleservice';
import { APIResponse, CarModel } from '../../model/car';

@Component({
  selector: 'app-vehiclelist',
  imports: [],
  templateUrl: './vehiclelist.html',
  styleUrl: './vehiclelist.css',
})
export class Vehiclelist {
  vehicleService =inject(Vehicleservice);
  carList!: CarModel[];

  ngOnInit(){
    this.getAllCars();
  }

  getAllCars(){
    this.vehicleService.getCars().subscribe({
      next: (res: APIResponse)=>{
        this.carList = res.data;
      }
    })
  }

}
