const options = {};
const pgp = require("pg-promise")(options);

const connection = {
  host: "localhost",
  port: 5432,
  database: "githubstar",
  user: "taku",
  password: ""
};

var db = pgp(connection);
module.exports = db;
