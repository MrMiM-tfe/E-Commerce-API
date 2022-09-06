const { User } = require('../../../../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../../../../config.json')

const maxAge = config.AuthMaxAge * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, config.AppInfo.secret, { expiresIn: maxAge })
}

exports.postSignup = (req, res) => {

    var roles = config.defaultRole
    
    const data = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone_number: req.body.phone_number,
        roles,
        address: req.body.address,
    }

    User.create(data).then(user => {
        const token = createToken(user._id)
        res.cookie('token', token, { httpOnly: true, expiresIn: maxAge * 1000 })
        res.json({ msg: 'User created', user })
    }).catch((err) => {
        console.log(err);
        res.json(err)
    })
}

exports.postLogin = async (req, res) => {
    try {
        const user = await User.login(req.body.username, req.body.password)
        const token = createToken(user._id)
        res.cookie('token' , token , { httpOnly: true, expiresIn: maxAge * 1000})
        res.json(user)
    } catch (err) {
        res.status(400).json({ err : err.message })
    }
}

exports.logout = (req, res) => {
    res.cookie('token', '' , {expiresIn: 1})
    res.json({msg: "Loged out"})
}

