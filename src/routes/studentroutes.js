const express = require("express");
const createstudent = require("../controllers/student");

const studenntroutes = express.Router();



studenntroutes.post("/student",createstudent)

module.exports = studenntroutes