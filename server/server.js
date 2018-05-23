const path = require('path')
const express = require('express')

// Route files go here
const usersRoutes = require('./routes/users')

const server = express()
// middleware
server.use(express.static(path.join(__dirname, './public')))

// routes
server.use('/api/v1/users', usersRoutes)

// wildcard route
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
