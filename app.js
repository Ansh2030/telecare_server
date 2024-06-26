import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/userRoutes.js";
import doctorRouter from "./routes/doctorRoutes.js";
import appointRouter from "./routes/appointRoutes.js";
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


app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use('/api/orders',payment);



export  {app}