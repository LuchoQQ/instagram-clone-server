require("dotenv").config();

const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGO_URI)
    .then((db) => console.log("Db is connected"))
    .catch((error) => console.error(error));

module.exports = mongoose;
