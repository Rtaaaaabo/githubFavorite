"use strict";
const express = require("express");
const router = express.Router();
const api_favorite = require("./routerFavorite");

router.use("/favorite", api_favorite);

module.exports = router;
