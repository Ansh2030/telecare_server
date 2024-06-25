import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import doctorsRouter from './routes/getDoctor.js'; 
import patientsRouter from './routes/storePatient.js'
const app=express()
app.use(cors({
    origin:"*",
    Credential:true
}))
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit :"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())


app.use('/api/getDoctors', doctorsRouter);
app.use('/api/storepatients', patientsRouter);
app.use('/api/storeDoctor', patientsRouter);



export  {app}