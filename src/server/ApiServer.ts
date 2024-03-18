import express from 'express'
import productRouter from '../routes/productRoute'
export class ApiServer{
    public static async run(port:number | string):Promise<void>{
        const app = express()
        app
        .use(express.json())
        .use(express.urlencoded({extended:true}))
        .use('/api/v1' ,productRouter)
        .listen(port,()=>console.log(`port is running on ${port}`))
    }
}