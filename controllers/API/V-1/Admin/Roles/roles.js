const { Role } = require("../../../../../models")


exports.index = (req, res) => {
    Role.find().then(roles => {
        res.json(roles)
    })
}

exports.postCreate = (req, res) => {
    const data = {
        name: req.body.name,
        permissions: req.body.permissions
    }

    Role.create(data).then(role => {
        res.json(role)
    }).catch(err => {
        res.json({ err: 'cant Create Role' })
    })
}

exports.getEdit = (req, res) => {
    Role.findOne({ name: req.params.name }).then(role => {
        if (!role) {
            res.status(404).json({ err: 'cant find role' })
        }
        res.json(role)
    }).catch(err => {
        res.json({ err: 'cant get role' })
    })
}

exports.putEdit = (req, res) => {
    const data = {
        name: req.body.name,
        permissions: req.body.permissions
    }

    Role.findOneAndUpdate({ name: req.params.name }, data).then(last_role => {
        if (last_role) {
            res.json({ msg: "Role Updated", last_role })
        } else {
            res.status(404).json({ err: "cant find Role" })
        }
    }).catch(err => {
        res.json({ err: "cant edit Role" })
    })
}

exports.delete = (req, res) => {
    Role.findOneAndDelete({name : req.params.name}).then(role => {
        if (role){
            res.json({msg: `Role : [ ${role.name} ] deleted`})
        }else{
            res.status(404).json({err: "cant find Role"})
        }
    }).catch(err => {
        res.json({err : "cant delete Role"})
    })
}