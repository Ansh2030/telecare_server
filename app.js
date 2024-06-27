import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import doctorsRouter from './routes/getDoctor.js'; 
import patientsRouter from './routes/storePatient.js'
import doctorAppointement from "./routes/appointement.js"
import payment from "./routes/payments.js";
const app=express()
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit :"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())


app.use('/api/getDoctors', doctorsRouter);
app.use('/api/storepatients', patientsRouter);
app.use('/api/storeDoctor', patientsRouter);
app.use('/api/appoint', doctorAppointement);
app.use('/api/orders',payment);




export  {app}