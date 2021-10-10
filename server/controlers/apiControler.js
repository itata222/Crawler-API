const Axios=require('axios');

const url='http://localhost:5000';

const startApi = async (req, res) => {
    const {rootUrl,maxDepth,maxTotalPages}=req.body;
    try {
        const resp = await Axios.post(url + "/start-manager", {rootUrl,maxDepth,maxTotalPages});
        res.send({QueueUrl:resp.data.QueueUrl});
    } catch (error) {
        res.status(500).send({
            status:500,
            message:'Manager failed to start'
        })
    }
}

const checkCrawlingStatus=async(req,res)=>{
    const finished=req.finished;
    const QueueUrl=req.query.QueueUrl;
    let tree;
    try {
        if(finished)
            tree=await Axios.get(url + `/get-tree?QueueUrl=${QueueUrl}`);

        tree==undefined? res.send('still running') : res.send({tree})
    } catch (e) {
        res.status(500).send({
            status:500,
            message:'Checking status failed'
        })
    }
}

module.exports={
    startApi,
    checkCrawlingStatus
}