import EmergencyModel from "../Models/EmergencyModel.js";

// add Emergency 
export const emergencyRequest = async (req, res) => {
    const { location } = req.body;

    const newEmergency = new EmergencyModel({ location });

    try {
        await newEmergency.save();
        res.status(200).json("success")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllEmergency = async (req, res) => {
    try {
        // Retrieve all notices from the database
        const emergencies = await EmergencyModel.find();

        // Respond with the retrieved notices
        res.status(200).json(emergencies);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};