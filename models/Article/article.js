const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "User"
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: "ArticleComment"
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: "ArticleCategory"
    }],
    tags: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: "ArticleTag"
    }],
    cover_image: {
        type: String
    },
    state: {
        type: String
    }
})

ArticleSchema.pre('save', async function (next) {
        
    if (this.state == 'published' || this.state == 'draft') {
    }else{
        this.state = 'draft'
    }
    
    next()
})

module.exports = mongoose.model("Article", ArticleSchema)