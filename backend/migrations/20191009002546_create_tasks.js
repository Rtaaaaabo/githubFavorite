exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("favorite", table => {
      table.increments("id").primary();
      table.string("repository_name");
      table.string("url");
      table.string("description");
      table.string("language");
      table.string("owner_avator_url");
      table.string("owner_login_name");
      table.timestamps();
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable("favarite")]);
};
