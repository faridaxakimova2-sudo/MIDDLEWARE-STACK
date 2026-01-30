
const express = require('express');
const dotenv = require('dotenv');
const connectionDB = require('./config/db');

dotenv.config();
const app = express();

app.use(express.json());
app.use("./uploads", express.static("uploads"));
app.use("./", express.static("public"));

app.use("./api/images", require("./routes/image.router"));

connectionDB();
const  PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

