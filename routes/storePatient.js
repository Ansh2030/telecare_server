import express from 'express';
import Patient from '../model/patient.js'; // Adjust the path as per your project structure
import { upload } from '../middleware/multer.js';
import { uploadOnCloudianry } from '../utlis/cloudinary.js';

const router = express.Router();

// POST endpoint to save a new patient
router.post('/patients', upload.single("prescription"), async (req, res) => {
    try {
        // Assuming prescription URL is returned from Cloudinary upload
        const prescriptionUrl = req.file.path; // Adjust to get the correct path or URL from file upload middleware
        console.log('Prescription URL:', prescriptionUrl);

        // Upload to Cloudinary (if needed)
        const cloudinaryResponse = await uploadOnCloudianry(prescriptionUrl);
        console.log('Cloudinary Response:', cloudinaryResponse);

        // Extract fields from request body
        const { name, age, gender, email, address, phone } = req.body;

        // Create a new patient object
        const patient = new Patient({
            name,
            age,
            gender,
            email,
            address,
            phone,
            prescription: cloudinaryResponse // Save prescription URL or path
        });

        console.log(patient);
        // Save patient to MongoDB
        const savedPatient = await patient.save();

        res.status(201).json(savedPatient); // Respond with saved patient data
    } catch (err) {
        console.error('Error saving patient:', err);
        res.status(500).send('Internal server error');
    }
});

export default router;
