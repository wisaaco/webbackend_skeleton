var redis = require("redis");
var redis_client = redis.createClient();
const hash = require('object-hash');

function between(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}

function getRandomName() {
    var textArray = [
        'AT Hall', 'UIB', 'AT Bar', 'AT Lab10', 'AT Clase 4A', 'GC Hall', 'GC Bar'
    ]
    var randomNumber = Math.floor(Math.random() * textArray.length)

    return textArray[randomNumber]
}

exports.getSerieDay = (req, res) => {
    const id = req.params;
    var response ={data: Array.from({length: 13}, () => Math.floor(Math.random() * 40))}
    redis_client.setex(hash(id), 2592000, JSON.stringify(response));
    res.status(200).send(response);
};


exports.getSerieWeek = (req, res) => {
    const id = req.params;
    var response = {data: Array.from({length: 7}, () => Math.floor(Math.random() * 40))}
    redis_client.setex(hash(id), 2592000, JSON.stringify(response));
    res.status(200).send(response);
};

exports.getCurrentOcupation = (req, res) => {
    // const id = req.params;
    var response =  {
      "name": getRandomName(),
      "percentage": between(0, 99),
      "current": between(10, 40),
      "total": between(100, 300),
      "step": between(-10, 10),
      "data": [{
        data: Array.from({length: 7}, () => Math.floor(Math.random() * 40))
      }]
    }
    // redis_client.setex(hash(id), 2592000, JSON.stringify(response));
    res.status(200).send(response);
};


