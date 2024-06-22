//  model of the Emergency

import mongoose from "mongoose";

const EmergencySchema = mongoose.Schema({
    location: {
        type: String,
        required: true
    }
}, { timestamps: true })

const EmergencyModel = mongoose.model("Emergency", EmergencySchema);
export default EmergencyModel;