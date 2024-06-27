import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PatientSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    email: String,
    specialization: String,
    years: Number,
    fees: Number
});

const Patient = model('Patient', PatientSchema);

export default Patient;
