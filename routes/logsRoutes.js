const express = require("express");
const axios = require("axios");
const Logs = require("../models/logs");
const router = express.Router();
const moment = require("moment");
const config = require("../config/config");



router.get("/search", async (req, res, next) => {
  const pageSize = req.query.pageSize ? Number(req.query.pageSize) : 50;
  const pageNo = req.query.pageNo ? Number(req.query.pageNo) * pageSize : 0;
  const ands = [
  ];
  let logs = await Logs.paginate(
    { $and: ands },
    { sort: { createdAt: -1 }, limit: pageSize, offset: pageNo }
  );
  res.status(200).json(logs);
});


module.exports = { router };
