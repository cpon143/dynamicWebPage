const express = require('express')
const routes = require('./routes/main')
const hbs = require('hbs')
const mongoose = require('mongoose')
const Detail = require('./models/detail')
const Slider = require('./models/Slider')
const bodyParser = require('body-parser')
const app = express()
const Service = require('./models/Services')
const About = require('./models/About')


//to access static files from public folder
app.use('/static', express.static("public"))

//to use the body parser
app.use(bodyParser.urlencoded({ extended: true }))

//to use the routes
app.use('/', routes);

//to set the view engine
app.set('view engine', 'hbs')

// app.set('views', __dirname + '/views') or
app.set("views", "views")

//to register the partials
hbs.registerPartials("views/partials")

//to connect to the database
mongoose.connect("mongodb://localhost:27017/website_tut")
    .then(() => {
        console.log('Connected to the database');

        //for inserting the data into the database for about part

        // About.create(
        //     {
        //         title: "Empowering Minds, Shaping Futures",
        //         description: "Student's Choice is a leading online tutoring platform dedicated to helping students achieve their academic goals. Our team of experienced tutors offers personalized learning experiences tailored to each student's needs, ensuring they excel in their studies and achieve success in their academic and professional careers.",
        //         btnText: "Learn More",
        //         img: "https://www.vidyard.com/wp-content/themes/vidyard-website/img/pages/company/about-us/main-image.png.webp"
        //     });



        //for inserting the data into the database for services part
        // Service.create([
        //     {
        //         icon: "fa-solid fa-school",
        //         title: "Personalized Online Tutoring",
        //         description: "Our online tutoring services provide personalized learning experiences tailored to each student's needs. With certified tutors in various subjects, we offer interactive sessions, flexible scheduling, and comprehensive study materials to help you excel academically.",
        //         btnText: "View More",
        //         link: "www.studentschoice.in"
        //     },
        //     {
        //         icon: "fa-solid fa-school",
        //         title: "Ace Your Exams with Confidence",
        //         description: "Prepare for your standardized tests with confidence through our specialized courses. Our experienced instructors will guide you through proven strategies, practice exams, and targeted study plans, ensuring you are fully prepared to achieve your best score on exams like the SAT, ACT, GRE, and more.",
        //         btnText: "View More",
        //         link: "www.studentschoice.in"
        //     },
        //     {
        //         icon: "fa-solid fa-school",
        //         title: "Navigate Your Career Path Successfully",
        //         description: "Our career counseling services help students explore career options, set goals, and develop the skills needed for success in their chosen fields. From choosing the right major to identifying internship opportunities, our experienced counselors provide personalized guidance to empower students in their career journey.",
        //         btnText: "View More",
        //         link: "www.studentschoice.in"
        //     },
        // ])




        //for inserting the data into the database for slider part
        // Slider.create([
        //     {
        //         title: "Node.js",
        //         subTitle: "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows developers to use JavaScript to write command line tools and for server-side scripting.",
        //         imgUrl: "./static/images/3bg.png"
        //     },

        //     {
        //         title: "Express.js",
        //         subTitle: "Express.js is a popular web application framework for Node.js. It simplifies the process of writing web applications and APIs by providing a robust set of features for routing, middleware, and handling HTTP requests and responses.",
        //         imgUrl: "./static/images/2bg.png"
        //     },

        //     {
        //         title: "MongoDB",
        //         subTitle: "MongoDB is a source-available cross-platform document-oriented database program. It is classified as a NoSQL database program, which means it does not use the traditional SQL tabular relational database structure. Instead, it uses JSON-like documents with optional schemas.",
        //         imgUrl: "./static/images/1bg.png"
        //     },
        // ])


        //for inserting the data into the database for navbar part
        //     Detail.create({
        //         brandName: "Student's Choice",
        //         brandIconUrl: "https://www.studentschoice.in",
        //         brandIconUrl: "https://img.freepik.com/free-vector/3d-polygon-icon_1020-746.jpg?w=740&t=st=1711557901~exp=1711558501~hmac=16c8c34fb0dd198baa610dc03ca87fdb94eb472ef589b6b33cd91ace6fec8163",
        //         links: [{
        //             label: "Home",
        //             url: "/"
        //         },
        //         {
        //             label: "Services",
        //             url: "./services"
        //         },
        //         {
        //             label: "Gallery",
        //             url: "./gallery"
        //         },
        //         {
        //             label: "About Us",
        //             url: "./about"
        //         },
        //         {
        //             label: "Contact Us",
        //             url: "./contact"
        //         },
        //     ]
        //     })
    })


app.listen(process.env.PORT || 5556, () => {
    console.log("Serve Started");
})

