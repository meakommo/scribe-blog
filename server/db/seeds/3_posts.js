exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(() => {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          date_posted: Date.now(),
          title: 'first test blog post',
          body: 'These are words to test the body of the post',
          author: 'admin'
        }
      ])
    })
}
