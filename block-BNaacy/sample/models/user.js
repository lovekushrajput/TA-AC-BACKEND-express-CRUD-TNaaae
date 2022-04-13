let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
    username : String,
    email: String
},{ timestamps:true }) 

let User = mongoose.model("User",userSchema)

module.exports = User