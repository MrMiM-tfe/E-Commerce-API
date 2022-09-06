const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleCategorySchema = new Schema({
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
        ref: 'ArticleCategory'
    },
    articles:[{
        type:mongoose.Schema.Types.ObjectID,
        ref: 'Article'
    }]
})

module.exports = mongoose.model('ArticleCategory' , ArticleCategorySchema)