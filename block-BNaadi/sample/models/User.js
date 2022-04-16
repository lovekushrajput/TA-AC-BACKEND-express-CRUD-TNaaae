let mongoose = require("mongoose")
let Schema = mongoose.Schema

let userSchema = new Schema({
name: String,
email: { type:String , required: true },
age: Number,
bio: String
})

module.exports = mongoose.model("User", userSchema)