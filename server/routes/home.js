const express = require('express')

const auth = require('../lib/auth')

const db = require('../db/home')

const router = express.Router()

// router.use(express.json())
// router.use(auth.decode)
// router.use(auth.securityCheck)

router.get('/', (req, res) => {
  db.getAllPosts()
    .then(posts => {
      res.json(posts)
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})

module.exports = router
