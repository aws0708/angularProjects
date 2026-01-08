import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APIResponse } from '../model/car';

@Injectable({
  providedIn: 'root',
})
export class Vehicleservice {
  http = inject(HttpClient);
  apiUrl:string='https://freeapi.miniprojectideas.com/api/CarRentalApp'

  getCars(){
    return this.http.get<APIResponse>(this.apiUrl +"/GetCars")
  }
  createNewCar(carObj:any){
    return this.http.post<APIResponse>(this.apiUrl+"/CreateNewCar",carObj);
  }
  updateCar(carObj:any){
    return this.http.put<APIResponse>(this.apiUrl+"/UpdateCar",carObj);
  }
  deleteCar(id:number){
    return this.http.delete<APIResponse>(this.apiUrl + "/DeleteCarbyCarId?carid=" + id);
  }
}
