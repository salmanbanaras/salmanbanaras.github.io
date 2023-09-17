const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logs = new Schema({

  time: Date,
  fromIP: String,
  method: String,
  url: String,
  requestData: String,
  responseData: String,
  timeTaken: Number,
  status: Number,
  email: String,
  phone: String,
  userId: String,
  device: String,
  reqId: String,
  name: String,
  role: String,
  platform: String,
  version: String,
  osVersion: String,
  deviceId: String
});


module.exports = mongoose.model("log", logs);
