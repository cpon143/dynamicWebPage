const mongoose = require('mongoose');

const About = mongoose.Schema(
    {
        title: String,
        description: String,
        btnText: String,
        img: String
    });

module.exports = mongoose.model('About', About);