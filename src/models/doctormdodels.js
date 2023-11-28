

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    lastname:String
})

exports.student =  mongoose.model('student', studentSchema)