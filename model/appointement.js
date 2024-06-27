import mongoose from 'mongoose';


const { Schema, model } = mongoose;

const appointmentSchema = new Schema({
    docname: String,
    docemail: String,
    patname:String,
    patemail:String,
    date:String,
    time:String,
    link:String
    
  
},{
    timestamps:true
});

const Appointment = model('Appointment', appointmentSchema);

export default Appointment;
