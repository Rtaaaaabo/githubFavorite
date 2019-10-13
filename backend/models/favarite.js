"use strict";

const Bookshelf = require("../bookshelf");
const Promise = require("bluebird");

const Favorite = Bookshelf.Model.extend(
  {
    tableName: "favarite"
  },
  {}
);

module.exports = Favorite;
