require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
var cors = require("cors");
var cron = require("node-cron");
var morgan = require('morgan')
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
const config = require("./config/config");
const axios = require('axios')

config.connectDB();

app.use(methodOverride("_method"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));



app.set("port", process.env.PORT || 8080);
//app.use(express.static(__dirname + '/public'))

app.listen(process.env.PORT || 8080, () => {
  console.log("Express Server running on port " + app.get("port"));
});



    
// Graceful shutdown, on sigint ( generated with <Ctrl>+C in the terminal ) - kill/close database connection and exit
process.on("SIGINT", () => {
  config.disconnectDB();
  process.exit(0);
});
//
