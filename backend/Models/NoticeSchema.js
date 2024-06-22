//  model of the Notice

import mongoose from "mongoose";

const NoticeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, { timestamps: true })

const NoticeModel = mongoose.model("Notice", NoticeSchema);
export default NoticeModel;