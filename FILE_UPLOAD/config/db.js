const mongoose = require("mongoose")
async function connectDB(){
    try {
      await mongoose.connect(process.env.DB_URL) 
      console.log("connected to the MongoDB"); 
    } catch (error) {
       console.log("Connection Failed",error.message); 
    }
}
module.exports = connectDB