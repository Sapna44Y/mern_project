const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.url)
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log("Can't connect db");
    });
};
module.exports = dbConnect;
