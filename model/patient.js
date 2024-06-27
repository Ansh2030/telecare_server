import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PatientSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    email: String,
   address: String,
    phone: String,
    prescription: String,
});

const Patient = model('Patient', PatientSchema);

export default Patient;
