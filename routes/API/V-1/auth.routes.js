const express = require('express')
const router = express.Router()

// import Controllers
const { Auth } = require('../../../controllers/API/V-1/')

const {requireAuth , notLogin, isFirstUser} = require('../../../middlewares/API/V-1/auth')

router.post('/signup', notLogin, Auth.postSignup)
router.post('/login', notLogin, Auth.postLogin)
router.delete('/logout', requireAuth, Auth.logout)

router.post('/createsuperuser', isFirstUser, Auth.postCreateSuperUser)

module.exports = router