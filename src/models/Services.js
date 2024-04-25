const mongoose = require('mongoose');

//object schema
const Service = mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    btnText:String,
    link:String
})

module.exports = mongoose.model('Service', Service);