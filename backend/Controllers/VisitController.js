import EntryModel from "../Models/EntryModel.js";
import ExitModel from "../Models/ExitModel.js";

// add visit
export const addEntry = async (req, res) => {
    const { category, visitorID, reason, entryTime, exitTime, status, image } = req.body;

    const newVisit = new EntryModel({ category, visitorID, reason, entryTime, exitTime, status, image });

    try {
        const oldExit = await ExitModel.findOne({ visitorID: visitorID });

        if (!oldExit) {
            await newVisit.save();
            res.status(200).json("success");
        }

        oldExit.status = "false";
        await oldExit.save();
        return res.status(200).json({ message: 'entry added successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// add visit
export const addExit = async (req, res) => {
    const { category, visitorID, reason, entryTime, exitTime, status, image } = req.body;

    const newVisit = new ExitModel({ category, visitorID, reason, entryTime, exitTime, status, image });

    try {
        const oldEntry = await EntryModel.findOne({ visitorID: visitorID });

        if (!oldEntry) {
            await newVisit.save();
            res.status(200).json("success");
        }

        oldEntry.status = "false";
        await oldExit.save();
        return res.status(200).json({ message: 'exit added successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}