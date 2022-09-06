const express = require('express')
const router = express.Router()

// import Controllers
const {Shop , Cart , Order} = require('../../../controllers/API/V-1/')

// cart routes
router.get('/cart' , Cart.index)
router.post('/cart' , Cart.postAddToCart)
router.delete('/cart' , Cart.delete)
router.put('/cart' , Cart.putEdit)

// order routes
router.post('/order' , Order.postCreate)
router.post('/pay' , Order.postRequestPayment)

router.get('/' , Shop.index)
router.get('/tag/:slug' , Shop.getByTag)
router.get('/category/:slug' , Shop.getByCategory)
router.get('/:slug' , Shop.getSingleProduct)


module.exports = router
