import dotenv from "dotenv"
import {app} from './app.js'

import connectDb from "./db/index.js"

dotenv.config({
    path:"./.env"
})
// console.log(process.env.PASSWORD);
connectDb()
.then(()=>{
    app.listen(8080,()=>{
        console.log(`the server  is  running at port 8080 `);
    })
    // app.on("error",(error)=>{
    //     console.log("Err:",error);
    //     throw error

    // })
})
.catch((err)=>{
    console.log("MONOGO db connection failed!!!" ,err);
})