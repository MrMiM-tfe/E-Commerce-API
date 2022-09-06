const express = require('express')
const router = express.Router()

// import Controllers
const {User} = require('../../../controllers/API/V-1/')

// user profile routes
router.get('/profile' , User.getEdit)
router.put('/profile' , User.putEdit)


module.exports = router
