const mongoose = require('mongoose');

const Slider=mongoose.Schema({
    title:String,
    subTitle:String,
    imgUrl:String,
})

module.exports=mongoose.model('Slider',Slider);