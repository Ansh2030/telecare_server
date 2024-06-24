const {model} = require('mongoose');

exports.Doctor= model('doctors',{
    name: String,
  age: Number,
  gender: String,
  email: String,
  specialization: String,
  years: Number,
  fees: Number

})
