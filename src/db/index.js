
const mongoose = require("mongoose");
const {dbname} =  require("../constants");




const  connectdb = async()=>{
    try{
  const connectionEstablished = await mongoose.connect(`${process.env.MONGOOSE_URL}/${dbname}`);
     console.log(`mongoose is connected ||  ${connectionEstablished.connection.host}`)
    }
    catch(error){
   console.log("mongose connection falied", error)
    }
}

module.exports = connectdb