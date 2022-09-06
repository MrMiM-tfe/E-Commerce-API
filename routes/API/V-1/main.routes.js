const express = require('express')
const router = express.Router()

// import controllers
const {Main} = require('../../../controllers/API/V-1/')

router.get('/' , Main.index)

module.exports = router