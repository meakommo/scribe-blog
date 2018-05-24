exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(() => {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          id: 1,
          user_id: 1,
          firstname: 'Aaron',
          lastname: 'Aaronson',
          email: 'admin',
          bio: 'admin test data'
        },
        {
          id: 2,
          user_id: 2,
          firstname: 'Beta',
          lastname: 'Betason',
          email: 'mod',
          bio: 'mod test data'
        },
        {
          id: 3,
          user_id: 3,
          firstname: 'Charlie',
          lastname: 'Charleston',
          email: 'user',
          bio: 'user test data'
        }
      ])
    })
}
