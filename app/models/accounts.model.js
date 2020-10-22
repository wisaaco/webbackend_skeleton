const sql = require("../db.js");

// constructor
const Account = function(table) {
  this.username = table.username;
  this.password = table.password;
  this.email = table.email;
};


Account.findById = (userId, result) => {
  sql.query(`SELECT * FROM accounts WHERE id = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};


// Table.getAll = result => {
//   sql.query("SELECT * FROM accounts", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("accounts: ", res);
//     result(null, res);
//   });
// };

module.exports = Account;
