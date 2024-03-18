import { Product } from "../entities/Proudct";

import { IbrandModel } from "../interfaces/brandmodel";
import { IproductRespository } from "../interfaces/productRepository";
import { IproductInteractor } from "../interfaces/proudctInteractor";

export class ProductRepository implements IproductRespository{
      public ripository : IproductInteractor
      constructor(ripository:IproductInteractor){
        this.ripository = ripository
      }

    
   
    onCreate(input: Product): Promise<Product> {
        
        throw new Error("Method not implemented.");
    }
    onUpdate(input: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
     getProduct(): Promise<Product[]> {
       return  this.ripository.getP()
    }
    getBrandmodel(): Promise<IbrandModel> {
        throw new Error("Method not implemented.");
    }
    
}