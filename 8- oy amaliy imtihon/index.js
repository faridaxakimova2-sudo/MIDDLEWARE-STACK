const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/events", require("./routes/eventRoutes"));

app.listen(3000, () => {
  console.log("Server 3000-portda ishlayapti");
});
