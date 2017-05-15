
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(table) {
    table.increments();
    table.text('text');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes')
};
