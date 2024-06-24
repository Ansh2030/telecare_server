const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Doctor } = require("../model/doctor");


router.post('/', async (req, res)=>{
    data = req.body;
    const d = new Doctor(data);
    await  d.save();
    res.send(data);
})

module.exports = router;