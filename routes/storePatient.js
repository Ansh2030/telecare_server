const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Patient } = require("../model/patient");
// const { User } = require("../models/user");





router.post('/', async (req, res)=>{
    data = req.body;
    const d = new Patient(data);
    await  d.save();
    res.send(data);
})

module.exports = router;