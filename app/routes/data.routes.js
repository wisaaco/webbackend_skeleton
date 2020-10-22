const { authJwt } = require("../middleware");
const cacheRedis = require("../middleware/cacheRedis.js");
const dataCtrl = require("../controllers/data.controller.js");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/data/day/:building/:year/:month/:day", 
    [authJwt.verifyToken,cacheRedis.checkCache],
    dataCtrl.getSerieDay
  );

  app.get(
    "/data/week/:building/:year/:weekof", 
    [authJwt.verifyToken,cacheRedis.checkCache],
    dataCtrl.getSerieWeek
  );


  app.get(
    "/data/capacity/:zone", 
    [authJwt.verifyToken],
    dataCtrl.getCurrentOcupation
  );

};
