const { User } = require('../../../../models/')

exports.getEdit = async (req, res) => {
    const user = await User.curentUser(req.cookies.token)

    res.json(user)
}
exports.putEdit = async (req, res) => {
    const user = await User.curentUser(req.cookies.token)

    const data = {
        address: req.body.address
    }

    User.findByIdAndUpdate(user._id, data).then(last_user => {
        res.json(last_user)
    })
}