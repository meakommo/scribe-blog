const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)
const {generate} = require('../lib/crypto')

const crypto = require('../lib/crypto')

module.exports = {
 
}
