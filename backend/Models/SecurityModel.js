//  model of the security

import mongoose from "mongoose";

const SecuritySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    employeID: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true })

const SecurityModel = mongoose.model("Security", SecuritySchema);
export default SecurityModel;