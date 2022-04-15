let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema( {
    name : String,
    age: Number,
    email : String
} , {timestamps: true})

module.exports = mongoose.model("User",userSchema)