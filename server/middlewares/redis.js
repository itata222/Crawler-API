const redisClient = require("../db/redis");

const checkIfCrawlDoneRedis = async (req, res, next) => {
  const workID = req.query.workID;
  try {
    const workDict = await redisClient.hgetallAsync(`workDict-${parseInt(workID) + 1}`);
    workDict.finished.includes("false") ? (req.finished = false) : (req.finished = true);

    next();
  } catch (e) {
    res.send({
      status: 500,
      message: "someting went wrong",
    });
  }
};

module.exports = {
  checkIfCrawlDoneRedis,
};
