import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[] = [];
  carDetails:CarDetail[] = [];
  brands:Brand[] = [];
  dataLoaded = false;

  constructor(private carService:CarService, private brandService:BrandService) { }

  ngOnInit(): void {
    this.getCarDetails();
    this.getBrands();
  }

  getCars(){
    this.carService.getCars().subscribe(Response => {
      this.cars = Response.data
      this.dataLoaded = true;
    })
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response => {
      this.carDetails = response.data
      this.dataLoaded = true;
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
      this.dataLoaded = true;
    })
  }

}
