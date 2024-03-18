
import dotenv from 'dotenv'
import { ApiServer } from './server/ApiServer'

async function server(){
    const port = process.env.PORT || 3500
    dotenv.config({path:'.env'})
   await ApiServer.run(port)

}

server()
