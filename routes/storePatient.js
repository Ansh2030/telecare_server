import express from 'express';
import Patient from '../model/patient.js'; // Adjust the path as per your project structure

const router = express.Router();

// POST endpoint to save a new patient
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPatient = new Patient(data);
        await newPatient.save();
        res.send(data);
    } catch (err) {
        console.error('Error saving patient:', err);
        res.status(500).send('Internal server error');
    }
});

export default router;
