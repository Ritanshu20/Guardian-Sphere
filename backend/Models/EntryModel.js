//  model of the Visit

import mongoose from "mongoose";

const EntrySchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    visitorID: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    exitTime: {
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

const EntryModel = mongoose.model("Entry", EntrySchema);
export default EntryModel;