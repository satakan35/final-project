const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({

    // Title of job that candidate is applying to (autopopulated from job found through our app, or user manual input if manual application)
    title: {
        type: String,
        required: true
    },
    // Location of job (pre-populated from job found through our app, or user manual input if manual application )
    location: {
        type: String
    },
    // Current status of application. Pre-application: user wants to apply but hasn't officially done so yet. New: applied but no contact. 
    // Phone Screen, interview, coding assessment, offer, accepted, rejected. Manually entered by candidate
    status: {
        type: String
    },
    // Company that application is for (pre-populated from job found through our app, or user manual input if manual application )
    company: {
        type: String
    },
    // Description of company (pre-populated from job found through our app, or user manual input if manual application )
    companyDescription: {
        type: String
    },
    // Description of job opening listed on advertisement (pre-populated from job found through our app, or user manual input if manual application )
    jobDescription: {
        type: String
    },

    // Qualifications listed on job advertisement (pre-populated from job found through our app, or user manual input if manual application )
    qualifications: {
        type: String
    },
    // Any additional job information listed on job advertisement (pre-populated from job found through our app, or user manual input if manual application )
    additionalJobInfo: {
        type: String
    },

    // This would be the level of interest that the user has in this particular job application. We will then give the users the ability to filter their applications by this input. 
    // Manually entered by user
    interest: {
        type: Number
    },
    // Last communication with company regarding this application. 
    // Manually entered by user. 
    lastComm: {
        type: String
    },

    // Date of last communication with company
    // Manually entered by user
    lastCommDate: {
        type: Date
    },
    // Any notes that the user would like to add regarding this job application.
    // Manually entered by user
    notes: {
        type: String
    },

    // This will be a way we can give users the ability to add tasks pertinent to a job application. E.g. send in application, follow-up with resources, complete coding assessment, etc. 
    // Manually entered by user
    task: {
        type: String
    },

    // Nested information about the task. With due-date, we could incorporate a way to remind users about upcoming due dates on tasks. 
    nested: {
        taskTitle: {type: String},
        taskDescription: {type: String},
        taskDueDate: {type: Date}
    }
});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;