const jwt = require('jsonwebtoken')
const config = require('../../../config.json')
const { User, Role } = require('../../../models')

const chekUserPermission = async (user) => {
    var permissions = []

    for await (const name of user.roles) {
        const role = await Role.findOne({ name })
        permissions.push.apply(permissions, role.permissions)
    };

    return permissions
}
exports.requireAuth = (req, res, next) => {
    const token = req.cookies.token

    if (token) {
        jwt.verify(token, config.AppInfo.secret, (err, decodedToken) => {
            if (err) {
                res.status(410).json({ err: "PLease Login" })
            } else {
                next()
            }
        })
    } else {
        res.status(410).json({ err: "PLease Login" })
    }
}

exports.requireAdmin = (req, res, next) => {
    const token = req.cookies.token

    if (token) {
        jwt.verify(token, config.AppInfo.secret, (err, decodedToken) => {
            if (err) {
                res.status(410).json({ err: "PLease Login" })
            } else {
                User.findById(decodedToken.id).then(async (user) => {
                    if (user) {
                        const userPremissions = await chekUserPermission(user)
                        if (userPremissions.includes('administrator')) {
                            next()
                        } else {
                            res.status(410).json({ err: "No Permission" })
                        }
                    } else {
                        res.status(410).json({ err: "No Permission" })
                    }
                }).catch(err => {
                    res.status(410).json({ err: "No Permission" })
                })
            }
        })
    } else {
        res.status(410).json({ err: "PLease Login" })
    }
}

exports.notLogin = (req, res, next) => {
    const token = req.cookies.token

    if (token) {
        jwt.verify(token, config.AppInfo.secret, (err, decodedToken) => {
            if (err) {
                next()
            } else {
                res.json({ err: "You are already logged in" })
            }
        })
    } else {
        next()
    }
}


exports.isFirstUser = async (req, res, next) => {
    const userCount = await User.countDocuments({})
    if (userCount === 0) {
        next()
    }
    res.json({"err" : "super user created beffor"})
}