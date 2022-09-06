const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleCommentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    article:{
        type: mongoose.Schema.Types.ObjectId ,
        ref: "Article",
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId ,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model('ArticleComment' , ArticleCommentSchema)