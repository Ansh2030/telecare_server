// Import necessary models
import Appointment from "../models/appointmentModel.js";
import User from "../models/userModel.js";

// Define controller functions
const getallappointments = async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [{ userId: req.query.search }, { doctorId: req.query.search }],
        }
      : {};

    const appointments = await Appointment.find(keyword)
      .populate("doctorId")
      .populate("userId");
    return res.send(appointments);
  } catch (error) {
    res.status(500).send("Unable to get appointments");
  }
};

const bookappointment = async (req, res) => {
  try {
    const appointment = new Appointment({
      date: req.body.date,
      time: req.body.time,
      doctorId: req.body.doctorId,
      userId: req.locals,
    });

    const result = await appointment.save();
    return res.status(201).send(result);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Unable to book appointment");
  }
};

const completed = async (req, res) => {
  try {
    const alreadyFound = await Appointment.findOneAndUpdate(
      { _id: req.body.appointid },
      { status: "Completed" }
    );

    return res.status(201).send("Appointment completed");
  } catch (error) {
    res.status(500).send("Unable to complete appointment");
  }
};

// Export controller functions
export { getallappointments, bookappointment, completed };
