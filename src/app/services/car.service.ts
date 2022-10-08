import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/cad-detailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:7022/api/cars/"
  
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl + "getall");
  }

  getCarDetails():Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl + "getcardetails");
  }
}