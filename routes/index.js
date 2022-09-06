const express = require('express')
const router = express.Router()

// import Routes
const webRoutes = require('./web')
const APIRoutes = require('./API/')

router.use('/api', APIRoutes)
router.use(webRoutes)

module.exports = router