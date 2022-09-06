const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductTagSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }]
})

module.exports = mongoose.model('ProductTag', ProductTagSchema)