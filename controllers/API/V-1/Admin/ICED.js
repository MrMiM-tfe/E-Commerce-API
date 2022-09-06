const Models = require("../../../../models")
const slugify = require('slugify')

const generateData = async (datas, req) => {

    let Data = {}

    for await (const data of datas) {
        if (typeof (data) == 'string') {
            Data[data] = req.body[data]
        } else if (typeof (data) == 'object') {
            const key = Object.entries(data)[0][0]
            const value = Object.entries(data)[0][1]
            if (typeof (value) == 'string') {
                Data[key] = await exptions[value](req, data.args)
            } else if (typeof (data) == 'object') {
                Data[key] = await value()
            }
        }
    }

    return Data
}

exports.index = async (req, Model , query = {}) => {
    console.log('items');

    const limit = req.query.limit || 10
    const page = req.query.page - 1 || 0

    const totalCount = await Models[Model].countDocuments({})
    const totalPage = Math.ceil(totalCount / limit)


    try {
        const items = await Models[Model].find(query).skip(limit * page).limit(limit)
        console.log(items);
        if (items) {
            return { page: page + 1, limit, totalCount, totalPage, items }
        } else {
            return { msg: "page is empty" }
        }
    } catch (err) {
        return { err: err.message }
    }
}

exports.postCreate = async (req, Model, data = []) => {

    try {
        const Data = await generateData(data, req)
        const item = await Models[Model].create(Data)
        return item
    } catch (err) {
        return { err: err.message }
    }

}

exports.getEdit = async (req, Model) => {
    const slug = req.params.slug
    try {
        const item = Models[Model].findOne({ slug })
        return item
    } catch (err) {
        return { err: err.message }
    }
}

exports.putEdit = async (req, Model, data = []) => {
    const slug = req.params.slug

    try {
        const Data = await generateData(data, req)
        const item = await Models[Model].findOneAndUpdate({slug} , Data)
        return item
    } catch (err) {
        return { err: err.message }
    }
}

exports.delete = async (req, Model) => {
    const slug = req.params.slug
    try {
        const item = await Models[Model].findOneAndDelete({slug})
        return item
    } catch (err) {
        return { err: err.message }
    }
}

// ---------------------------------------------------------------
const exptions = {}

exptions.curent_user = async (req) => {
    const user = await Models.User.curentUser(req.cookies.token)
    return user._id
}

exptions.slug = async (req, args) => {
    const slug = slugify(req.body[args[0]])
    return slug
}