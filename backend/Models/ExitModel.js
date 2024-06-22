//  model of the Visit

import mongoose from "mongoose";

const ExitSchema = mongoose.Schema({
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

const ExitModel = mongoose.model("Exit", ExitSchema);
export default ExitModel;