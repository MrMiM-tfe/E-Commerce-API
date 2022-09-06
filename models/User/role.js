const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema({
    name:{
        type: String,
        unique: true
    },
    permissions:[{
        type: String
    }]
})

module.exports = mongoose.model('Role' , RoleSchema)