const Axios = require("axios");

const url = "http://localhost:5000";

const startApi = async (req, res) => {
  const { rootUrl, maxDepth, maxTotalPages } = req.body;
  try {
    const response = await Axios.post(url + "/start-manager", { rootUrl, maxDepth, maxTotalPages });
    res.send({ QueueUrl: response.data.QueueUrl, workID: response.data.workID });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Manager failed to start",
    });
  }
};

const checkCrawlingStatus = async (req, res) => {
  const { QueueUrl, workID, maxDepth, maxTotalPages } = req.query;
  let tree;
  try {
    const treeResponse = await Axios.get(
      url + `/get-tree?QueueUrl=${QueueUrl}&workID=${workID}&maxDepth=${parseInt(maxDepth)}&maxTotalPages=${parseInt(maxTotalPages)}`
    );
    tree = treeResponse.data.tree;
    isfinished = treeResponse.data.finished;
    res.send({ tree, isfinished });
  } catch (e) {
    res.status(500).send({
      status: 500,
      message: e.response?.data?.message || e,
    });
  }
};

module.exports = {
  startApi,
  checkCrawlingStatus,
};
