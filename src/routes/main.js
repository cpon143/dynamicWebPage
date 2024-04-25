const express = require('express')
const{route}=require('express/lib/application')

const Detail = require('../models/detail')
const Slider = require('../models/Slider')
const Service = require('../models/Services')
const Contact = require('../models/Contact')
const About = require('../models/About')

const routes= express.Router()

routes.get('/', async(req, res)=>{
    const details=await Detail.findOne({"_id": "660edf74461265e88f1d2f71"})
    const slides = await Slider.find()
    const service = await Service.find()
    const about = await About.findOne({"_id": "6623fc177c6a2d60cf324650"})
    // console.log(about)

    /* console.log(details)*/
    // console.log(Slides)

    res.render("index",{
        details: details,
        slides: slides,
        service: service,
        about: about ? about : null
    })
})

routes.get('/gallery', async(req,res)=>{
    const details=await Detail.findOne({"_id": "660edf74461265e88f1d2f71"})
    res.render("gallery",{
        details: details
    })
})

routes.post('/contact', async (req, res)=>{
    console.log("Form submitted");
    console.log(req.body);
    //sending data to the database
    try{
        const data = await Contact.create(req.body)
        console.log(data);
        res.redirect('/')
    }
    catch(e){
        console.log(e);
        res.redirect('/')
    }
})

module.exports = routes


