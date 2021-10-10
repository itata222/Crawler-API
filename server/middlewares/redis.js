const redisClient = require('../db/redis');

const checkIfCrawlDoneRedis=(async(req,res,next)=>{
    try {
        const workDict= await redisClient.hgetallAsync("workDict");
        workDict.finished.includes('false')?
        req.finished=false: req.finished=true
        
        next();
    } catch (e) {
        res.send({
            status:500,
            message:'someting went wrong'
        })
    }
})


module.exports={
    checkIfCrawlDoneRedis
}

