const express = require("express");

require("dotenv").config();
const dbConnect = require("./config/database");
const routes = require("./routes/routes");

const app = express();

const port = process.env.port;

app.listen(port, () => {
  console.log("Server is on");
});

dbConnect();

// MIDDLE WARE FOR PASING THE REQUEST BODY
app.use(express.json());

app.use("/base", routes);
