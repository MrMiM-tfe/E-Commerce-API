const { Product, User, Cart } = require('../../../../models/')

exports.index = async (req, res) => {

    const user = await User.curentUser(req.cookies.token)
    const userId = user._id

    try {
        let cart = await Cart.findOne({ userId, active: true });
        if (cart) {
            let totalPrice = 0
            for await (const product of cart.products) {
                totalPrice += product.price * product.quantity
            }
            res.json({ cart, totalPrice })
        } else {
            res.json({ msg: 'Cart is empty' })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message });
    }
}

exports.postAddToCart = async (req, res) => {
    const { productId, quantity } = req.body;

    const user = await User.curentUser(req.cookies.token)
    const userId = user._id

    const product = await Product.findById(productId)
    const price = product.sell_price
    const name = product.title

    try {
        let cart = await Cart.findOne({ userId, active: true });

        if (cart) {
            let itemIndex = cart.products.findIndex(p => p.productId == productId);

            if (itemIndex > -1) {
                let productItem = cart.products[itemIndex];
                productItem.quantity += quantity;
                productItem.price = price
                cart.products[itemIndex] = productItem;
            } else {
                cart.products.push({ productId, quantity, name, price });
            }
            cart = await cart.save();
            return res.status(201).json(cart);
        } else {
            const newCart = await Cart.create({
                userId,
                products: [{ productId, quantity, name, price }]
            });

            return res.status(201).json(newCart);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Something went wrong" });
    }
}

exports.putEdit = async (req, res) => {
    const { products } = req.body;

    const user = await User.curentUser(req.cookies.token)
    const userId = user._id

    try {
        let cart = await Cart.findOne({ userId, active: true });

        if (cart) {

            for await (const product of products){
                let itemIndex = cart.products.findIndex(p => p.productId == product.productId);

                if (itemIndex > -1) {
                    let productItem = cart.products[itemIndex];
                    productItem.quantity = product.quantity;
                    cart.products[itemIndex] = productItem;
                }
            }
            cart = await cart.save();
            return res.status(201).json(cart);
        } else {
            const newCart = await Cart.create({
                userId,
                products: []
            });
            return res.status(201).json(newCart);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Something went wrong" });
    }
}

exports.delete = async (req, res) => {
    const { productId } = req.body;

    const user = await User.curentUser(req.cookies.token)
    const userId = user._id


    try {
        let cart = await Cart.findOne({ userId, active: true });

        if (cart) {
            let itemIndex = cart.products.findIndex(p => p.productId == productId);

            if (itemIndex > -1) {
                cart.products.splice(itemIndex, 1);
            } else {
                res.json({msg : "product not found"})
            }
            cart = await cart.save();
            return res.status(201).json(cart);
        } else {
            const newCart = await Cart.create({
                userId,
                products: []
            });
            return res.status(201).json(newCart);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Something went wrong" });
    }
}