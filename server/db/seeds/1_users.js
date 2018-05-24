const {getHash} = require('../../lib/crypto')

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'admin',
          hash: getHash('admin'),
          role: 'admin'
        },
        {
          id: 2,
          username: 'mod',
          hash: getHash('mod'),
          role: 'moderator'
        },
        {
          id: 3,
          username: 'user',
          hash: getHash('user'),
          role: 'user'
        }
      ])
    })
}
