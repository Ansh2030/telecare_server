// Import necessary modules
import express from "express";
import { getuser, getallusers, login, register, updateprofile, deleteuser } from "../controllers/userController.js";
// import { auth } from "../middleware/auth.js";

// Create express router
const userRouter = express.Router();

// Routes
userRouter.get("/getuser/:id",  getuser);
userRouter.get("/getallusers",  getallusers);
userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.put("/updateprofile", updateprofile);
userRouter.delete("/deleteuser", deleteuser);

// Export the router as default
export default userRouter;
