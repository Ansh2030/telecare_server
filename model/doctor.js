import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const DoctorSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    email: String,
    specialization: String,
    years: Number,
    fees: Number
});

const Doctor = model('Doctor', DoctorSchema);

export default Doctor;
