//  model of the Admin

import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
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

const AdminModel = mongoose.model("Admin", AdminSchema);
export default AdminModel;