let mongoose = require("mongoose")
let Schema = mongoose.Schema

let studentSchema = new Schema({
    name : String,
    class : Number,
    schoolName : String 
},{timestamps : true})

let STUDENT = mongoose.model("STUDENT",studentSchema)

module.exports= STUDENT