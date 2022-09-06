const express = require('express')
const router = express.Router()

// import Controllers
const { 
    Admin, 
    AdminProducts, 
    AdminRoles, 
    AdminArticle, 
    AdminProductCategories, 
    AdminArticleCategories,
    AdminProductTags,
    AdminArticleTags
} = require('../../../controllers/API/V-1/')

// Main Routes ------------------------------------------------------
// router.get('/', Admin)

// Products Routes --------------------------------------------------
router.get('/products', AdminProducts.index)
router.post('/products', AdminProducts.postCreate)
router.get('/products/:slug', AdminProducts.getEdit)
router.put('/products/:slug', AdminProducts.putEdit)
router.delete('/products/:slug', AdminProducts.delete)

// Product Categories Routes
router.get('/categories/products', AdminProductCategories.index)
router.post('/categories/products', AdminProductCategories.postCreate)
router.get('/categories/products/:slug', AdminProductCategories.getEdit)
router.put('/categories/products/:slug', AdminProductCategories.putEdit)
router.delete('/categories/products/:slug', AdminProductCategories.delete)

// Product Tags Routes
router.get('/products/tags', AdminProductTags.index)
router.post('/products/tags', AdminProductTags.postCreate)
router.get('/products/tags/:slug', AdminProductTags.getEdit)
router.put('/products/tags/:slug', AdminProductTags.putEdit)
router.delete('/products/tags/:slug', AdminProductTags.delete)

// Article Routes ---------------------------------------------------
router.get('/article', AdminArticle.index)
router.post('/article', AdminArticle.postCreate)
router.get('/article/:slug', AdminArticle.getEdit)
router.put('/article/:slug', AdminArticle.putEdit)
router.delete('//:slug', AdminArticle.delete)

// Article Categories Routes
router.get('/categories/article', AdminArticleCategories.index)
router.post('/categories/article', AdminArticleCategories.postCreate)
router.get('/categories/article/:slug', AdminArticleCategories.getEdit)
router.put('/categories/article/:slug', AdminArticleCategories.putEdit)
router.delete('/categories/article/:slug', AdminArticleCategories.delete)

// Product Tags Routes
router.get('/articles/tags', AdminArticleTags.index)
router.post('/articles/tags', AdminArticleTags.postCreate)
router.get('/articles/tags/:slug', AdminArticleTags.getEdit)
router.put('/articles/tags/:slug', AdminArticleTags.putEdit)
router.delete('/articles/tags/:slug', AdminArticleTags.delete)

// Role Routes ------------------------------------------------------
router.get('/roles', AdminRoles.index)
router.post('/roles', AdminRoles.postCreate)
router.get('/roles/:name', AdminRoles.getEdit)
router.put('/roles/:name', AdminRoles.putEdit)
router.delete('/roles/:name', AdminRoles.delete)

module.exports = router
