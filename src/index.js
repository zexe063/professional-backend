
require("dotenv").config();
const app = require("./app");
const connectdb = require("./db/index")
connectdb()

app.listen(process.env.PORT,()=>{
    console.log(`server is  started||${process.env.PORT}`)
})