
const mongoose = require('mongoose');

// Basic setup of the Mongoose Schema
const ExamSchema = new mongoose.Schema({
    petName: {
        type: String,
        required:[true,"Name is required"],
        minlength: [3,"Name has to be not less than 3 characters"]
    },
    petType: {
        type:String,
        required:[true,"Type is required"],
        minlength: [3,"Type has to be not less than 3 characters"]
    },
    petDescription: {
        type: String,
        required:[true,"Description is required"],
        minlength: [3,"Description has to be not less than 3 characters"]
    },
    skills1: {
        type: String
    },
    skills2: {
        type: String
    },
    skills3: {
        type: String
    },
    likes: {
        type: Number
    }
})


// This is how we register our schema.
const Exam = mongoose.model("Exam", ExamSchema);

// Finally we export it out of the file.
module.exports = Exam;
