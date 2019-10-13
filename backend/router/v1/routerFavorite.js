"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../../controllers/api/controller");

router.route("/").get(controller.getFavorites);
router.route("/:id").get(controller.getFavorite);
router.route("/").post(controller.postFavorite);
router.route("/:id").delete(controller.deleteFavorite);

module.exports = router;
