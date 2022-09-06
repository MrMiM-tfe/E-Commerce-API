const ICED = require('../ICED')

const Model = 'Product'

const data = [
    'type',
    { 'slug': 'slug', args: ['title'] },
    'title',
    'sell_price',
    'regular_price',
    'count',
    'short_description',
    'description',
    { 'user': 'curent_user' },
    'categories',
    'tags',
    'cover_image',
    'images',
    'parent',
    'state'
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