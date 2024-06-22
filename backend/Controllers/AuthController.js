import StudentModel from "../Models/StudentModel.js";
import SecurityModel from "../Models/SecurityModel.js";
import AdminModel from "../Models/AdminModel.js";

// Add an student
export const registerstudent = async (req, res) => {
    const { name, scholarID, email, hostel, password, phoneNumber, image } = req.body;

    const newStudent = new StudentModel({ name, scholarID, email, hostel, password, phoneNumber, image });

    try {
        const oldUser = await StudentModel.findOne({ email: email });

        if (oldUser) {
            res.status(400).json({ message: "user is already registered" });
        }
        await newStudent.save();
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// log in for student
export const loginStudent = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await StudentModel.find({ email: email });

        if (password == user[0].password) {
            res.status(200).json(user);
        } else {
            res.status(400).json("Wrong password");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// login for security
export const loginSecurity = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await SecurityModel.find({ email: email });

        if (password == user[0].password) {
            res.status(200).json(user);
        } else {
            res.status(400).json("Wrong password");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// login for admin
export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await AdminModel.find({ email: email });

        if (password == user[0].password) {
            res.status(200).json(user);
        } else {
            res.status(400).json("Wrong password");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
