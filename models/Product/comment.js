const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductCommentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId ,
        ref: "Product",
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId ,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model('ProductComment' , ProductCommentSchema)