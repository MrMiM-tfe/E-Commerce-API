const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    cart: [{
        type: Schema.Types.Mixed
    }],
    delivery_price:{
        type: Number,
        defult: 0
    },
    total_price:{
        type:Number
    },
    payment_method:{
        type: String,
        required: true
    },
    state: {
        type: String
    }
}, { timestamps: true })

OrderSchema.pre('save' , function(next){
    this.total_price = this.delivery_price + this.cart.total_price
    next()
})

module.exports = mongoose.model('Order', OrderSchema)