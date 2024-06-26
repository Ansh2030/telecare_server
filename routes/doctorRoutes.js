// Import necessary modules
import express from "express";
import { getalldoctors, getnotdoctors, applyfordoctor, deletedoctor, acceptdoctor, rejectdoctor } from "../controllers/doctorController.js";
import { auth } from "../middleware/auth.js";

// Create express router
const doctorRouter = express.Router();

// Routes
doctorRouter.get("/getalldoctors", getalldoctors);
doctorRouter.get("/getnotdoctors", auth, getnotdoctors);
doctorRouter.post("/applyfordoctor", auth, applyfordoctor);
doctorRouter.put("/deletedoctor", auth, deletedoctor);
doctorRouter.put("/acceptdoctor", auth, acceptdoctor);
doctorRouter.put("/rejectdoctor", auth, rejectdoctor);

// Export the router as default
export default doctorRouter;
