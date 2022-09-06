const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleTagSchema = new Schema({
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
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
        required: true
    }]
})

module.exports = mongoose.model('ArticleTag', ArticleTagSchema)