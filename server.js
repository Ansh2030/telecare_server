require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());

//routes
const connectdb = async()=>{
    await mongoose.connect(`mongodb+srv://anshsrivastavaofficial:${process.env.PASSWORD}@cluster0.s0f44iu.mongodb.net/TeleCare`)

console.log(`db is connected host = ${mongoose.connection.host}`)
}
connectdb();

// app.use('/store/user',require('./routes/user'));
app.use('/store/patients', require('./routes/storePatient'));

app.get('/',(req, res)=>{
    res.send("I am on");
})

app.listen('8080',()=>{
    console.log("listening on 8080");
})