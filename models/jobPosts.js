const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const JobPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const JobPost = mongoose.model('JobPosts', JobPostSchema);

module.exports =  JobPost;