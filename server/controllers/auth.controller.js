import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { createError } from "../utils/error.js";
import { connectDB } from "../db/connect.js";

const router = express.Router();
router.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Sign-up Route
export const signUp = async (req, res, next) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return next(createError(400, "Missing required fields."));
    }

    try {
        await connectDB();

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return next(createError(400, "User already exists."));
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id, username: newUser.username }, JWT_SECRET, { expiresIn: "1d" });

        res.status(201).json({
            success: true,
            message: "User created successfully.",
            user: { id: newUser._id, username: newUser.username, email: newUser.email },
            token,
        });
    } catch (error) {
        next(createError(500, "User creation failed."));
    }
};

// Login Route
export const logIn = async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return next(createError(400, "Missing credentials."));
    }

    try {
        await connectDB();
        const user = await User.findOne({ username });

        if (!user) {
            return next(createError(401, "Invalid username or password."));
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return next(createError(401, "Invalid username or password."));
        }

        const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: "1d" });

        res.status(200).json({
            success: true,
            message: "Login successful.",
            user: { id: user._id, username: user.username, email: user.email },
            token,
        });
    } catch (error) {
        next(createError(500, "Login failed."));
    }
};

// Logout Route
export const logOut = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            message: "Logout successful.",
        });
    } catch (error) {
        next(createError(500, "Logout failed."));
    }
};

export default router;
