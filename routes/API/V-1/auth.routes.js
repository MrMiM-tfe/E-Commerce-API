const express = require('express')
const router = express.Router()

// import Controllers
const { Auth } = require('../../../controllers/API/V-1/')

const {requireAuth , notLogin} = require('../../../middlewares/API/V-1/auth')

router.post('/signup', notLogin, Auth.postSignup)
router.post('/login', notLogin, Auth.postLogin)
router.delete('/logout', requireAuth, Auth.logout)

module.exports = router