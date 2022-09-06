// main controllers -----------------------------------------
exports.Main = require('./Main')
exports.NotFound = require('./Main/404')

// admin controllers ----------------------------------------
exports.Admin = require('./Admin/Main/admin')
exports.AdminRoles = require('./Admin/Roles/roles')

// admin products
exports.AdminProducts = require('./Admin/Products/products')
exports.AdminProductCategories = require('./Admin/Products/categories')
exports.AdminProductTags = require('./Admin/Products/tags')
// admin articles
exports.AdminArticle = require('./Admin/Articles/article')
exports.AdminArticleCategories = require('./Admin/Articles/categories')
exports.AdminArticleTags = require('./Admin/Articles/tags')

// auth controllers -----------------------------------------
exports.Auth = require('./Auth/auth')

// shop controllers -----------------------------------------
exports.Shop = require('./Shop/shop')
exports.Cart = require('./Shop/cart')

// Dashboard Controllers ------------------------------------
exports.Order = require('./Dashboard/orders')
exports.User = require('./Dashboard/user')
