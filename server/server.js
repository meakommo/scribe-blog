const path = require('path')
const express = require('express')

// Route files go here
// const ROUTE_NAME = require('./ROUTE_PATH')

const server = express()
// middleware
server.use(express.static(path.join(__dirname, './public')))

// routes
// server.use('/api/v1/URL_TO_CALL', ROUTE BEING CALLED)

// wildcard route
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
