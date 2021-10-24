const express = require("express");
const { startApi, checkCrawlingStatus } = require("../controlers/apiControler");

const router = new express.Router();

router.post("/start-api", startApi);

router.get("/get-crawling-status", checkCrawlingStatus);

module.exports = router;
