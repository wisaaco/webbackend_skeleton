const Accounts = require("../models/accounts.model.js");

exports.getOne = (req, res) => {
  Accounts.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found USER with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving USER with id " + req.params.userId
        });
      }
    } else res.send(data);
  });
};


