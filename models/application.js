const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    status: {
        type: String
    },
    company: {
        type: String
    },
    companyDescription: {
        type: String
    },
    jobDescription: {
        type: String
    },
    qualifications: {
        type: String
    },
    additionalJobInfo: {
        type: String
    },
    interest: {
        type: Number
    },
    lastComm: {
        type: String
    },
    lastCommDate: {
        type: Date
    },
    notes: {
        type: String
    },
    task: {
        type: String
    },
    nested: {
        taskTitle: {type: String},
        taskDescription: {type: String},
        taskDueDate: {type: Date}
    }
});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;