const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const SavedJobSchema = new Schema({
    title: {
        type: String
    },
    // ID Used to run axios query to get rest of job information
    jobId: {
        type: String
    }
});

const SavedJob = mongoose.model("SavedJob", SavedJobSchema);

module.exports = SavedJob;

