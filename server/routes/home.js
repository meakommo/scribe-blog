const express = require('express')

const auth = require('../lib/auth')

// const db = require('../db/DB_FUNCTION FILE GOES HERE')

const router = express.Router()

router.use(express.json())
router.use(auth.decode)
router.use(auth.securityCheck)

// router.get('/', auth.isAdmin, (req, res) => {
// // Route function goes here
//     .catch(err => {
//       res.status(500).json({errorMessage: err.message})
//     })
// })

module.exports = router
