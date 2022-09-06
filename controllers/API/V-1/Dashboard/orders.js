const { User, Cart, Order } = require('../../../../models/')
const { getPaymentDriver } = require("monopay");
const config = require("../../../../config.json")
exports.postCreate = async (req, res) => {

    const user = await User.curentUser(req.cookies.token)

    if (!user.address) {
        return res.json({ msg: "Please Enter address in profile" })
    }

    const cart = await Cart.findOne({ user: user._id, active: true })

    const data = {
        user: user._id,
        cart,
        delivery_price: 100,
        payment_method: "zarinpal",
        state: "created"
    }

    Order.create(data).then(order => {
        Cart.findOneAndUpdate({ user: user._id, active: true }, { active: false }).then(cart => {
            res.json(order)
        })
    }).catch(err => {
        res.json({ err: err.message })
    })
}

exports.postRequestPayment = async (req, res) => {

    const order = await Order.findById(req.body.order)

    if (!order) {
        res.json({ err: "please enter order id" })
    }

    const driver = getPaymentDriver(order.payment_method, {
        merchantId: config.AppInfo.merchantId,
    });

    const paymentInfo = await driver.requestPayment({
        amount: 1000,
        callbackUrl: "https://my-site.com/callback",
        description: "Description about the transaction",
    })

    res.json({ Script: paymentInfo.getScript() })
}


exports.postVerifyPayment = async (req, res) => {

    const order = await Order.findById(req.body.order)

    if (!order) {
        res.json({ err: "please enter order id" })
    }

    const driver = getPaymentDriver(order.payment_method, {
        merchantId: config.AppInfo.merchantId,
    });

    const receipt = await driver.verifyPayment(
        {
            amount: 1000,
            referenceId: 1234,
        },
        { ...request.params, ...request.body }
    );
}