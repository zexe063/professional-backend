

const { model } = require("mongoose");
const {student} = require("../models/doctormdodels");

const createstudent = async(req,res)=>{
    const data = await new student(req.body);
    data.save()
    res.json(data)
 
}

module.exports = createstudent;