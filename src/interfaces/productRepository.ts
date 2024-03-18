import { Product } from "../entities/Proudct";
import { IbrandModel } from "./brandmodel";



export interface IproductRespository{
onCreate(input:Product):Promise<Product>
onUpdate(input:number):Promise<Product>
getProduct():Promise<Product[]>
getBrandmodel():Promise<IbrandModel>
}