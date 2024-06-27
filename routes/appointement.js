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
    try{
        const{patemail,docemail,link}=req.body;
        console.log(link);
        await Appointment.updateMany({$and: [
            { patemail: patemail },
            { docemail: docemail }
          ]},  {$set: { link: link } }
        )
        res.send("data updated")
    
    }
    catch(e){
        res.send(e.message);
    }
})
   
// POST endpoint to save a new patient
router.post('/getappointment', async (req, res) => {
    try {
        // console.log("hi");
       const t=req.body;
    //    console.log(t.user);
       const allAppointment= await  Appointment.find( {$or: [
        { patemail: t.user },
        { docemail: t.user }
      ]});
       res.send(allAppointment);
    //    if(!loggedin){
    //      return res.status(201).json({
    //         message:"User not Found"
    //     })
    // }
    //     else{
    //         // res.redirect("https://chatgpt.com")
    //         return res.status(200).json
                
    //            ( {message:"user exist"})
    //     }
       
    } catch (err) {
        
        res.status(500).send(err.message);
    }
});

export default router;