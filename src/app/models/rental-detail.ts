import { Time } from "@angular/common";

export interface RentalDetail{
    customerFullName:string;
    brandName:string;
    rentDate:Time;
    returnDate:Time;
}