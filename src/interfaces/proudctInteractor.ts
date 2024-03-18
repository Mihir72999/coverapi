import { Product } from "../entities/Proudct";

export interface IproductInteractor {
    create(input:Product):Promise<Product>;
    update(input:number):Promise<Product>;
    getP():Promise<Product[]>;
    getB():Promise<Product>;
}