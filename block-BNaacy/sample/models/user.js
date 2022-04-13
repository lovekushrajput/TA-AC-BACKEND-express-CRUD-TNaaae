let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
    username : String,
    email: String
},{ timestamps:true }) 

let user = mongoose.model("user",userSchema)

module.exports = user