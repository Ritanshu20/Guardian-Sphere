//  model of the student

import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    scholarID: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hostel: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true })

const StudentModel = mongoose.model("Student", StudentSchema);
export default StudentModel;