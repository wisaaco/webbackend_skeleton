const redis = require("redis");
const hash = require('object-hash');

var redis_client = redis.createClient();

checkCache = (req, res, next) => {
    const id = req.params;
    redis_client.get(hash(id), (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        //if no match found
        if (data != null) {
            res.send(data);
        } else {
            //proceed to next middleware function
            next();
        }
    });
};

const cacheRedis = {
    checkCache: checkCache
};
module.exports = cacheRedis;

