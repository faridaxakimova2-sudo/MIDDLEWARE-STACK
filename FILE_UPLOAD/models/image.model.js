const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    filename:String,
    path : String,
    size:Number,
    mimetype:String
},{timestams:true})
const imageModel = mongoose.model("Image",imageSchema)
module.exports = imageModel