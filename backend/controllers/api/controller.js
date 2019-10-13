"use strict";

const Promise = require("bluebird");
const Favorite = require("../../models/favarite");
const FavoriteCollection = require("../../collections/favariteCollection");

function getFavorite(req, res) {
  const id = req.params.id;
  Favorite.forge({ id: id })
    .fetch({
      columns: [
        "repository_name",
        "url",
        "description",
        "language",
        "owner_avator_url",
        "owner_login_name"
      ]
    })
    .then(favorite => {
      res.json(favorite.toJSON());
    })
    .catch(error => {
      res.status(500).json({ msg: error.message });
    });
}

function getFavorites(req, res) {
  FavoriteCollection.getList()
    .then(favoites => {
      res.json(favoites);
    })
    .catch(error => {
      res.status(500).json({ msg: error.message });
    });
}

function postFavorite(req, res) {
  new Favorite({
    repository_name: req.body.repositoryName,
    url: req.body.url,
    description: req.body.description,
    language: req.body.language,
    owner_avator_url: req.body.ownerAvatorUrl,
    owner_login_name: req.body.ownerLoginName,
    created_at: new Date().toISOString()
  })
    .save()
    .then(favorite => {
      res.json(favorite.id);
    })
    .catch(error => {
      res.status(500).json({ msg: error.message });
    });
}

function deleteFavorite(req, res) {
  new Favorite()
    .where("id", req.params.id)
    .destroy()
    .then(favorite => {
      res.json({ message: "success" });
    })
    .catch(error => {
      res.status(500).json({ msg: error.message });
    });
}

module.exports = {
  getFavorite: getFavorite,
  getFavorites: getFavorites,
  postFavorite: postFavorite,
  deleteFavorite: deleteFavorite
};
