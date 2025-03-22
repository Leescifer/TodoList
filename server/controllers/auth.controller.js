import express from "express"
import { createError } from "../utils/error.js"
import { connectDB } from "../db/connect.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

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
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(userDetails.password, salt);

        const result = await User.create({ 
            ...userDetails, 
            password: hash 
        });

        res.status(201).send({
            success: true,
            message: "User Created Successfully",
            data: result,
        });

    } catch (error) {
        next(createError(500, "User Creation Failed"));
    }
};


export const logIn = async (req, res, next) => {
    
}
export const logOut = async (req, res, next) => {
}