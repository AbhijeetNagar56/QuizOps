
import Student from '../models/Student.js'
import Faculty from '../models/Faculty.js'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// Student

export async function createStudent(req, res) {
    try {
        const { rollNo, password } = req.body;
        const userExists = await Student.findOne({ rollNo });
        if (userExists) return res.status(400).json({ msg: 'User already exists' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Student({ rollNo, password: hashedPassword });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.log("Error in the app ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export async function student(req, res) {
    try {
        const { rollNo, password } = req.body;
        const user = await Student.findOne({ rollNo });
        if (!user) return res.status(404).json({ message: "user not found" });
        const passCorrect = await bcrypt.compare(password, user.password);
        if (!passCorrect) return res.status(400).json({ msg: 'password not correct' });
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '2d' });
        res.json({token});
    } catch (error) {
        console.log("Error in the app ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}


// Faculty

export async function createFaculty(req, res) {
    try {
        const { facultyId, password } = req.body;
        const userExists = await Faculty.findOne({ facultyId });
        if (userExists) return res.status(400).json({ msg: 'User already exists' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Faculty({ facultyId, password: hashedPassword });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.log("Error in the app ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export async function faculty(req, res) {
    try {
        const { facultyId, password } = req.body;
        const user = await Faculty.findOne({ facultyId });
        if (!user) return res.status(404).json({ message: "user not found" });
        const passCorrect = await bcrypt.compare(password, user.password);
        if (!passCorrect) return res.status(400).json({ msg: 'password not correct' });
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '2d' });
        res.json({token});
    } catch (error) {
        console.log("Error in the app ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ msg: "Logged out" });
};


