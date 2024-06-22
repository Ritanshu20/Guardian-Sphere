import NoticeModel from "../Models/NoticeSchema.js";

// add notice
export const addNotice = async (req, res) => {
    const { title, description, date } = req.body;

    const newNotice = new NoticeModel({ title, description, date });

    try {
        await newNotice.save();
        res.status(200).json("success")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllNotices = async (req, res) => {
    try {
        // Retrieve all notices from the database
        const notices = await NoticeModel.find();

        // Respond with the retrieved notices
        res.status(200).json(notices);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};