import express from 'express';
import Doctor from '../model/doctor.js'; // Adjust the path as per your project structure

const router = express.Router();

// POST endpoint to save a new doctor
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newDoctor = new Doctor(data);
        await newDoctor.save();
        res.send(data);
    } catch (err) {
        console.error('Error saving doctor:', err);
        res.status(500).send('Internal server error');
    }
});

export default router;
