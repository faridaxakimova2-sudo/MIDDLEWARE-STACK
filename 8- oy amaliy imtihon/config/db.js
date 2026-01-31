const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/eventDB");
    console.log("MongoDB ulandi");
  } catch (error) {
    console.log("MongoDB xatolik:", error);
  }
};

module.exports = connectDB;
