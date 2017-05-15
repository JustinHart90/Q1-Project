const pg = require('./knex')

function getData(id) {
  return pg('notes')
    .select()
    .where('id', id)
}

module.exports = {
  getData
}
