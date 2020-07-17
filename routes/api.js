const express = require('express');
const router = express.Router();
const request = require('request');
const JobPosts = require("../models/JobPosts");

// Accessing our models and passport for login/signup 

const db = require("../models")
const passport = require("../config/passport")

// LOGIN AND SIGNUP ROUTES SECTION

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Mongoose User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/signup", function (req, res) {
    console.log(req.body)
   
    db.User.create({
        firstName: req.body.payload.firstName,
        lastName: req.body.payload.lastName,
        email: req.body.payload.email,
        password: req.body.payload.password
    })
        .then(function () {
            console.log("user successfully added")
            res.redirect(307, "/login");
        })
        .catch(function (err) {
            console.log(err.message)
            res.status(401).json(err);
        });
});






// Routes
router.get('/', (req, res) => {

    JobPosts.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newJobPost = new JobPosts(data);

    newJobPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!! for Mongo'
        });
    });
});


router.get('/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});

// Takes query parameters from search form and generates URL string for API call
router.post('/indeed', (req, res) => {

    const baseURL = "https://api.indeed.com/ads/apisearch?v=2&userip=1.2.3.4&format=json&limit=25";
    const publisherId = "&publisher=1397045879077994";
    console.log(req.body)
    let query = `&q=${(req.body.query).toLowerCase().split(" ").join("+")}`;
    let location = `&l=${(req.body.location).split(" ").join("+")}`;
    let radius = `&radius=${(req.body.radius)}`;
    let jobType = `&jt=${(req.body.jobType).toLowerCase().split("-").join("")}`;

    const queryURL = baseURL + publisherId + query + location + radius + jobType;

     request({ url: queryURL }, (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: err.message });
          }
          res.json(JSON.parse(body));
        }
      )
})

module.exports = router;