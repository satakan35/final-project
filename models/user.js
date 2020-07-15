// Requiring bcrypt for password hashing and mongoose to create User model schema
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose'); 
// Creating our User model
const Schema = mongoose.Schema

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: "Email address is required",
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    }

});

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
UserSchema.methods = {
    validPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password);
    },
    hashPassword: function (plainPassword) {
        return bcrypt.hashSync(plainPassword, 10);
    }
};



UserSchema.pre("save", function (next) {
    if (!this.password) {
        console.log ("No password provided")
        next();
    }

    else {
        console.log("Password presaved")
        this.password = this.hashPassword(this.password)
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User;