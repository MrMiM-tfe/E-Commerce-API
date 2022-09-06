const ICED = require('../ICED')

const Model = 'ProductCategory'

const data = [
    { 'slug': 'slug', args: ['name'] },
    'name',
    'description',
    'cover_image',
    'parent'
]

exports.index = async (req, res) => {
    res.json(await ICED.index(req, Model))
}
exports.postCreate = async (req, res) => {
    res.json(await ICED.postCreate(req, Model, data))
}
exports.getEdit = async (req, res) => {
    res.json(await ICED.getEdit(req, Model))
}
exports.putEdit = async (req, res) => {
    res.json(await ICED.putEdit(req, Model , data))
}
exports.delete = async (req, res) => {
    res.json(await ICED.delete(req, Model))
}