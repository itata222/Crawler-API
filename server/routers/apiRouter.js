const express = require('express');
const { startApi, checkCrawlingStatus } = require('../controlers/apiControler');
const { checkIfCrawlDoneRedis } = require('../middlewares/redis');

const router = new express.Router();

router.post('/start-api',startApi)

router.get('/get-crawling-status',checkIfCrawlDoneRedis,checkCrawlingStatus)


module.exports = router;