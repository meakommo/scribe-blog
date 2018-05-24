exports.up = knex => knex.schema.createTable('posts', table => {
  table.increments('id').primary()
  table.integer('date_posted')
  table.text('title')
  table.text('body')
  table.string('author')
})

exports.down = knex => knex.schema.dropTable('posts')
