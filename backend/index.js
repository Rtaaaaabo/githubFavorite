const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// Config
const config = require("./config")(process.env.ENV);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const public_index = require("./router/public/index");
app.use("/", public_index);

const api_favorite = require("./router/v1/routerFavorite");
app.use("/api/favorite", api_favorite);

app.listen(config.port, function() {
  console.log("Example app listening on port " + config.port);
});
