const { Product, ProductCategory, ProductTag } = require('../../../../models/')

exports.index = async (req, res) => {

    let limit = parseInt(req.query.limit) || 10
    let page = parseInt(req.query.page) - 1 || 0

    const count = await Product.countDocuments({});
    const totalPages = Math.ceil(count / limit)

    Product.find().skip(limit * page).limit(limit).then(products => {
        if (products) {
            res.json({ products, page, count, totalPages })
        } else {
            res.json({ msg: "Page is empty" })
        }
    }).catch(err => {
        res.status(210).json({ err: err.message })
    })
}

exports.getByCategory = (req, res) => {
    const slug = req.params.slug

    const limit = req.query.limit || 10
    const page = req.query.page - 1 || 0

    ProductCategory.findOne({ slug }).then(async (category) => {
        if (category) {

            const totalCount = await Product.countDocuments({ categories: category._id })
            const totalPage = Math.ceil(totalCount / limit)

            Product.find({ categories: category._id }).skip(limit * page).limit(limit).then(products => {
                if (products) {
                    res.json({ page: page + 1, limit, totalCount, totalPage, products })
                } else {
                    res.json({ msg: "The category is empty" })
                }
            }).catch(err => {
                res.status(210).json({ err: err.message })
            })
        } else {
            res.status(404).json({ err: "cant find category" })
        }
    }).catch(err => {
        res.status(210).json({ err: err.message })
    })
}

exports.getByTag = (req, res) => {
    const slug = req.params.slug

    const limit = req.query.limit || 10
    const page = req.query.page - 1 || 0

    ProductTag.findOne({ slug }).then(async (tag) => {
        if (tag) {

            const totalCount = await Product.countDocuments({ tags: tag._id })
            const totalPage = Math.ceil(totalCount / limit)

            Product.find({ tags: tag._id }).skip(limit * page).limit(limit).then(products => {
                if (products) {
                    res.json({ page: page + 1, limit, totalCount, totalPage, products })
                } else {
                    res.json({ msg: "tag is empty" })
                }
            }).catch(err => {
                res.json({ err: err.message })
            })
        } else {
            res.status(404).json({ err: "cant find tag" })
        }
    })
}

exports.getSingleProduct = (req, res) => {
    const slug = req.params.slug

    Product.findOne({ slug }).then(product => {
        res.json(product)
    })
}