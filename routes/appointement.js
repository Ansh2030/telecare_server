import express from 'express';
import Appointment from '../model/appointement.js';

const router = express.Router();

router.post('/bookAppointment', async (req, res)=>{
    const data = req.body;
    console.log(data);
    const Appoint = new Appointment(data);
        await Appoint.save();
})


router.post("/update",async(req,res)=>{
    const{patemail,doctemail,link}=req.body;
    Appointment.updateOne({
        patemail:patemail,
        docemail:doctemail
    },  {$set: { link: link } }
    )
})
// POST endpoint to save a new patient
router.post('/getappointment', async (req, res) => {
    try {
        console.log("hi");
       const {user, loggedin}=req.body;
       
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
