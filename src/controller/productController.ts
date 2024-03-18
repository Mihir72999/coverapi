import {NextFunction, Request ,Response } from 'express'
import { IproductRespository } from '../interfaces/productRepository'
export class ProudctController{
    private interactor : IproductRespository
    constructor(interactor:IproductRespository){
      this.interactor = interactor
    }
    async onGetProduct(req:Request , res:Response , next:NextFunction ){
       try {
           const data = await this.interactor.getProduct()
           
           res.status(200).json(data)
        
       } catch (error) {
        next(error)
       }
    }
    async onUpdateProduct(req:Request, res:Response){}
    async onCreateProduct(req:Request , res:Response){}
    async onGetBrandModel(req:Request , res:Response){}
}