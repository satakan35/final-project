const express = require('express');
const router = express.Router();

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
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })
        .then(function () {
            console.log("user successfully added")
            res.redirect(307, "/login");
        })
        .catch(function (err) {
            console.log(err.message)
            res.status(401).json(err);
        });
})







// Routes
router.get('/', (req, res) => {

    console.log("Home Page")

    // JobPosts.find({  })
    //     .then((data) => {
    //         console.log('Data: ', data);
    //         res.json(data);
    //     })
    //     .catch((error) => {
    //         console.log('error: ', daerrorta);
    //     });
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

module.exports = router;