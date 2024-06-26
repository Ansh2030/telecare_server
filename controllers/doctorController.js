// Import necessary models
import Doctor from "../model/doctor.js";
import User from "../model/user.js";
import Appointment from "../model/appointement.js";

// Define controller functions
const getalldoctors = async (req, res) => {
  try {
    let docs;
    if (!req.locals) {
      docs = await Doctor.find({ isDoctor: true }).populate("userId");
    } else {
      docs = await Doctor.find({ isDoctor: true, _id: { $ne: req.locals } }).populate("userId");
    }

    return res.send(docs);
  } catch (error) {
    res.status(500).send("Unable to get doctors");
  }
};

const getnotdoctors = async (req, res) => {
  try {
    const docs = await Doctor.find({ isDoctor: false, _id: { $ne: req.locals } }).populate("userId");
    return res.send(docs);
  } catch (error) {
    res.status(500).send("Unable to get non-doctors");
  }
};

const applyfordoctor = async (req, res) => {
  try {
    const alreadyFound = await Doctor.findOne({ userId: req.locals });
    if (alreadyFound) {
      return res.status(400).send("Application already exists");
    }

    const doctor = new Doctor({ ...req.body.formDetails, userId: req.locals });
    const result = await doctor.save();

    return res.status(201).send("Application submitted successfully");
  } catch (error) {
    res.status(500).send("Unable to submit application");
  }
};

const acceptdoctor = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.body.id },
      { isDoctor: true, status: "accepted" }
    );

    const doctor = await Doctor.findOneAndUpdate(
      { userId: req.body.id },
      { isDoctor: true }
    );

    return res.status(201).send("Application accepted");
  } catch (error) {
    res.status(500).send("Error while accepting application");
  }
};

const rejectdoctor = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.body.id },
      { isDoctor: false, status: "rejected" }
    );

    const delDoc = await Doctor.findOneAndDelete({ userId: req.body.id });

    return res.status(201).send("Application rejected");
  } catch (error) {
    res.status(500).send("Error while rejecting application");
  }
};

const deletedoctor = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(req.body.userId, {
      isDoctor: false,
    });

    const removeDoc = await Doctor.findOneAndDelete({
      userId: req.body.userId,
    });

    const removeAppoint = await Appointment.findOneAndDelete({
      userId: req.body.userId,
    });

    return res.send("Doctor deleted successfully");
  } catch (error) {
    res.status(500).send("Unable to delete doctor");
  }
};

// Export controller functions
export {
  getalldoctors,
  getnotdoctors,
  applyfordoctor,
  acceptdoctor,
  rejectdoctor,
  deletedoctor,
};
