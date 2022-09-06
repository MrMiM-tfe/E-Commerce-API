const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        products: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                },
                quantity: Number,
                name: String,
                price: Number
            }
        ],
        active: {
            type: Boolean,
            default: true
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);