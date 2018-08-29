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
        },
        {
          id: 2,
          date_posted: Date.now(),
          title: 'Second test blog post',
          body: 'These are words to test the body of the post',
          author: 'admin'
        },
        {
          id: 3,
          date_posted: Date.now(),
          title: 'Third test blog post',
          body: 'These are words to test the body of the post',
          author: 'admin'
        },
        {
          id: 4,
          date_posted: Date.now(),
          title: 'Fourth test blog post',
          body: 'These are words to test the body of the post',
          author: 'admin'
        }
      ])
    })
}
