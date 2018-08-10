const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

function getAllPosts (db = knex) {
  return db('posts')
    .select()
}

module.exports = {
  getAllPosts
}
