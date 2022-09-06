const express = require('express')
const router = express.Router()

// import Routes
const mainRoutes = require('./main.routes')
const adminRoutes = require('./admin.routes')
const authRoutes = require('./auth.routes')
const shopRoutes = require('./shop.routes')
const dashboardRoutes = require('./dashboard.routes')

// import controllers
const { NotFound } = require('../../../controllers/API/V-1/')

// import middlewares
const { requireAdmin } = require('../../../middlewares/API/V-1/auth')

router.use(mainRoutes)
router.use(authRoutes)
router.use('/admin', requireAdmin, adminRoutes)
router.use('/shop', shopRoutes)
router.use('/dashboard', dashboardRoutes)

// 404
router.use('/*', NotFound.index)

module.exports = router