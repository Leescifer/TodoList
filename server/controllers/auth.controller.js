import express from "express"
import { createError } from "../utils/error.js"
import { connectDB } from "../db/connect.js"
import User from "../models/user.model.js"

const router = express.Router();
router.use(express.json());

export const signUp = async (req, res, next) => {
    const userDetails = req.body;
    console.log(userDetails); 

    if (!userDetails?.username || !userDetails?.password) {
        return next(createError(400, "Missing Fields"));
    }

    try {
        await connectDB();

        const alreadyRegistered = await User.exists({ username: userDetails.username });
        if (alreadyRegistered) {
            return next(createError(400, "User Already Exists."));
        }

        const result = await User.create(userDetails);
        res.status(201).send({
            success: true,
            message: "User Created Successfully",
            data: result,
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "User Creation Failed",
            error: error.message,
        });
    }
};


export const logIn = async (req, res, next) => {
}
export const logOut = async (req, res, next) => {
}