import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImageResponseModel } from '../models/car-imageResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = "https://localhost:7022/api/carImages/"
  
  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<CarImageResponseModel>{
    return this.httpClient.get<CarImageResponseModel>(this.apiUrl + "getall");
  }
}
