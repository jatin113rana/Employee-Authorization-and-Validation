const mongoose = require('mongoose')
const empSchema = new mongoose.Schema({
    empid:{type:Number},
    password:{type:String},
    name:{type:String}, 
})


const empModel = mongoose.model('emp',empSchema)
module.exports = empModel