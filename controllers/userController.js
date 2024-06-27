// Import necessary modules
import User from "../model/user.js";
// import Doctor from "../model/doctor.js";
// import Appointment from "../model/appointement.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// Define controller functions
const getuser = async (req, res) => {
  const {data} = req.body;
  try {
    // const user = await User.findById(req.params.id).select("-password");
    const user = await User.findOne({'email':data})
    return res.send(user);
  } catch (error) {
    res.status(500).send("Unable to get user");
  }
};

// const getallusers = async (req, res) => {
//   try {
//     const users = await User.find({ _id: { $ne: req.locals } }).select("-password");
//     return res.send(users);
//   } catch (error) {
//     res.status(500).send("Unable to get all users");
//   }
// };

// const login = async (req, res) => {
//   try {
//     const emailPresent = await User.findOne({ email: req.body.email });
//     if (!emailPresent) {
//       return res.status(400).send("Incorrect credentials");
//     }
//     const verifyPass = await bcrypt.compare(req.body.password, emailPresent.password);
//     if (!verifyPass) {
//       return res.status(400).send("Incorrect credentials");
//     }
//     const token = jwt.sign(
//       { userId: emailPresent._id, isAdmin: emailPresent.isAdmin },
//       process.env.JWT_SECRET,
//       { expiresIn: "2 days" }
//     );
//     return res.status(201).send({ msg: "User logged in successfully", token });
//   } catch (error) {
//     res.status(500).send("Unable to login user");
//   }
// };

// const register = async (req, res) => {
//   try {
//     const emailPresent = await User.findOne({ email: req.body.email });
//     if (emailPresent) {
//       return res.status(400).send("Email already exists");
//     }
//     const hashedPass = await bcrypt.hash(req.body.password, 10);
//     const user = new User({ ...req.body, password: hashedPass });
//     const result = await user.save();
//     if (!result) {
//       return res.status(500).send("Unable to register user");
//     }
//     return res.status(201).send("User registered successfully");
//   } catch (error) {
//     res.status(500).send("Unable to register user");
//   }
// };

// const updateprofile = async (req, res) => {
//   try {
//     const hashedPass = await bcrypt.hash(req.body.password, 10);
//     const result = await User.findByIdAndUpdate(
//       req.locals,
//       { ...req.body, password: hashedPass },
//       { new: true }
//     );
//     if (!result) {
//       return res.status(500).send("Unable to update user");
//     }
//     return res.status(201).send("User updated successfully");
//   } catch (error) {
//     res.status(500).send("Unable to update user");
//   }
// };
const updateprofile = async (req, res) =>{
  console.log(req.body);
}



// const deleteuser = async (req, res) => {
//   try {
//     const result = await User.findByIdAndDelete(req.body.userId);
//     const removeDoc = await Doctor.findOneAndDelete({ userId: req.body.userId });
//     const removeAppoint = await Appointment.findOneAndDelete({ userId: req.body.userId });
//     return res.send("User deleted successfully");
//   } catch (error) {
//     res.status(500).send("Unable to delete user");
//   }
// };

// Export controller functions
export {
  getuser,
  // getallusers,
  // login,
  // register,
  // updateprofile,
  // deleteuser,
};
