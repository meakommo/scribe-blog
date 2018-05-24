exports.up = knex => knex.schema.createTable('profiles', table => {
  table.increments('id').primary()
  table.integer('user_id').references('users.id')
  table.string('firstname')
  table.string('lastname')
  table.string('email')
  table.integer('date_created').defaultTo(Date.now())
  table.string('bio')
})

exports.down = knex => knex.schema.dropTable('profiles')
