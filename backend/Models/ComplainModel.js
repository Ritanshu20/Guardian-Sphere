//  model of the Complain

import mongoose from "mongoose";

const ComplainSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    scholarID: {
        type: String,
        required: true
    },
    hostel: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true })

const ComplainModel = mongoose.model("Complain", ComplainSchema);
export default ComplainModel;