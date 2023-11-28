const express = require('express');
const studenntroutes = require("./routes/studentroutes");
const app = express();
app.use(express.json())
app.use("/", studenntroutes);


app.get("/",(req,res)=>[
    res.send("helo profesional")
])

module.exports = app