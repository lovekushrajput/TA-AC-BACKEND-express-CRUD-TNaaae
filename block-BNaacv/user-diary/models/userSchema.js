let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
    name: String,
    username: String,
    email: String
})

let USER = mongoose.model('USER', userSchema)

module.exports = USER