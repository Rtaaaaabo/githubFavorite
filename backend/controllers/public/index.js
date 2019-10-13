"use strict";
const Promise = require("bluebird");
const FavoriteCollection = require("../../collections/favariteCollection");

function getIndex(req, res) {
  FavoriteCollection.getList()
    .then(favorite => {
      res.json(favorite);
    })
    .catch(error => {
      console.log("ここにも来ていない？");
      res.status(500).json({ msg: error.message });
    });
}

module.exports = {
  getIndex: getIndex
};
