import ComplainModel from "../Models/ComplainModel.js";

//  posting complain
export const postComplain = async (req, res) => {
    const { name, scholarID, hostel, category, description, status, image } = req.body;

    const newComplain = new ComplainModel({ name, scholarID, hostel, category, description, status, image });

    try {
        await newComplain.save();
        res.status(200).json("Success");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getComplain = async (req, res) => {
    try {
        const complainData = await ComplainModel.find();
        res.status(200).json(complainData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateComplainStatus = async (req, res) => {
    const { complainId, newStatus } = req.body;

    try {
        // Find the complain by ID
        const complain = await ComplainModel.findById(complainId);

        if (!complain) {
            return res.status(404).json({ message: 'Complain not found' });
        }

        // Update the status
        complain.status = newStatus;

        // Save the updated complain
        await complain.save();

        // Respond with the updated complain
        return res.status(200).json({ message: 'Complain status updated successfully', complain });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};