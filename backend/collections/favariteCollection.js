const Bookshelf = require("../bookshelf");
const Favorite = require("../models/favarite");
const Promise = require("bluebird");

const FavoriteCollection = Bookshelf.Collection.extend(
  {
    model: Favorite
  },
  {
    getList: function() {
      return new this()
        .fetch()
        .then(function(collection) {
          console.log("Collections Sucess");
          return collection.toJSON();
        })
        .catch(function(error) {
          console.log("collections Error");
          throw error;
        });
    }
  }
);

module.exports = FavoriteCollection;
