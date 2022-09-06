const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { isEmail, isMobilePhone } = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../config.json')

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 6,
        maxLength: 15
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        maxLength: 40,
        validate: [isEmail, "Please enter valid email"]
    },
    phone_number: {
        type: String,
        unique: true,
        validate: [isMobilePhone, "Please enter valid phone number"]
    },
    roles: [String],
    address: {
        type: String,
    },
    product_comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductComment"
    }],
    article_comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ArticleComment"
    }],
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article"
    }],
    cart_items: [{
        type: String,
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    }]
}, { timestamps: true })

UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)

    next()
})

UserSchema.statics.login = async function (username, password) {
    const user = await this.findOne({ username })
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password)
        if (validPassword) {
            user.password = ''
            return user
        } else {
            throw Error("invalid Password")
        }
    } else {
        throw Error("invalid Username")
    }
}

UserSchema.statics.curentUser = async function (token) {
    try {
        const decodedToken = jwt.verify(token, config.AppInfo.secret)
        var user = await this.findById(decodedToken.id)
        user.password = null
        return user
    } catch (err) {
        return null
    }
}

module.exports = mongoose.model("User", UserSchema)