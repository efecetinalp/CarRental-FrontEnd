import { RentalDetail } from "./rental-detail";
import { ResponseModel } from "./responseModel";

export interface RentalDetailResponseModel extends ResponseModel{
    data:RentalDetail[];
}