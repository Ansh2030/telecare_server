import express from 'express';
import Doctor from '../model/doctor.js'; // Adjust the path as per your project structure

const router = express.Router();

// GET all doctors
router.get('/doctor', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        console.log("doctors list ", doctors);
        // const doctorsArray = doctors.map(doctor => doctor.toObject());
        res.send(doctors);
    } catch (err) {
        console.error('Error retrieving doctors:', err);
        res.status(500).send('Internal server error');
    }
});

export default router;
