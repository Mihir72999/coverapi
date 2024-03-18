export class Product {
    constructor(
     public readonly id:string,
     public readonly name:string | null,
     public readonly price:number | null ,
     public readonly availableQty:number | null,
     public readonly image:string | null,
     public readonly brand:string | null,
     public readonly brandmodel:string | null  
    ){

    }
}