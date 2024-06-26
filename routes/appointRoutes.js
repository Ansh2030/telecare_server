import express from 'express';
import Patient from '../model/user.js';

const router = express.Router();


// POST endpoint to save a new patient
router.post('/getappointment', async (req, res) => {
    try {
        console.log("hi");
       const {loggedin}=req.body;
       
    //    const user= await  Patient.findOne({name})
       if(!loggedin){
         return res.status(201).json({
            message:"User not Found"
        })
    }
        else{
            // res.redirect("https://chatgpt.com")
            return res.status(200).json
                
               ( {message:"user exist"})
        }
       
    } catch (err) {
        
        res.status(500).send(err.message);
    }
});

export default router;
