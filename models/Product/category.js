const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductCategorySchema = new Schema({
    slug:{
        type:String,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required: true,
    },
    description:{
        type:String
    },
    cover_image:{
        type:String
    },
    parent:{
        type:mongoose.Schema.Types.ObjectID,
        ref: 'ProductCategory'
    },
    products:[{
        type:mongoose.Schema.Types.ObjectID,
        ref: 'Product'
    }]
})

module.exports = mongoose.model('ProductCategory' , ProductCategorySchema)