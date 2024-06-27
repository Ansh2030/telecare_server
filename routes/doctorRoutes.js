// Import necessary modules
import express from "express";
import { getalldoctors, getnotdoctors, applyfordoctor, deletedoctor, acceptdoctor, rejectdoctor } from "../controllers/doctorController.js";
// import { auth } from "../middleware/auth.js";

// Create express router
const doctorRouter = express.Router();

// Routes
doctorRouter.get("/getalldoctors", getalldoctors);
doctorRouter.get("/getnotdoctors", getnotdoctors);
doctorRouter.post("/applyfordoctor", applyfordoctor);
doctorRouter.put("/deletedoctor", deletedoctor);
doctorRouter.put("/acceptdoctor", acceptdoctor);
doctorRouter.put("/rejectdoctor", rejectdoctor);

// Export the router as default
export default doctorRouter;
