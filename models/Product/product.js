const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    type: {
        type: String
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    sell_price: {
        type: Number
    },
    regular_price: {
        type: Number
    },
    count: {
        type: Number
    },
    short_description: {
        type: String
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "User"
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: "Category"
    }],
    tags: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: "ProductTag"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: "ProductComment"
    }],
    cover_image: {
        type: String
    },
    images: [{
        type: String
    }],
    parent: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Product"
    },
    childrens: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: "Product"
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: "Order"
    }],
    state: {
        type: String
    }
})

    ProductSchema.pre('save', async function (next) {
        
        if (this.state == 'published' || this.state == 'draft') {
        }else{
            this.state = 'draft'
        }

        if (this.type == 'single' || this.type == 'mother' || this.type == 'children') {
        }else{
            this.type = 'single'
        }
        
        next()
    })


module.exports = mongoose.model('Product' , ProductSchema)