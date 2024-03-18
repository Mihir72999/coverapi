import prisma from "../db/connectDb";
import { Product } from "../entities/Proudct";
import { IproductInteractor } from "../interfaces/proudctInteractor";

export class ProductInteractor implements IproductInteractor{
    
    getB(): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    create(input: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    update(input: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    getP():Promise<Product[]> {
      return prisma.products.findMany()
      
    }
   
    
   
}