require('dotenv').config()

const server = require('./server')
const port = process.env.PORT || 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('The server is listening on port 3000')
})
