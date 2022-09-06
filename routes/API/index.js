const express = require('express')
const router = express.Router()

// import Routes
const v1Routes = require('./V-1/index')
// 
// const v1_2Routes = require('./V-1.2/index')
// const v2Routes = require('./V-2/index')

router.use('/v1', v1Routes)
// router.use('/v1-2', v1Routes)
// router.use('/v2', v1Routes)

module.exports = router