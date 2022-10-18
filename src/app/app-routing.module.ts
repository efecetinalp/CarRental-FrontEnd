import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:MainComponent},
  {path:"cars/getcardetails", component:CarComponent},
  {path:"brands/getall", component:BrandComponent},
  {path:"colors/getall", component:ColorComponent},
  {path:"customers/getall", component:CustomerComponent},
  {path:"rentals/getrentaldetails", component:RentalComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"transaction", component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
