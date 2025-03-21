import express from "express";
import User from "../models/user.model.js";

const router = express.Router();
router.use(express.json());

//Get all users
export const getAllUser = async (req, res) => {
    try {
        const result = await User.find();
        res.send({
            success: true,
            message: "User Lists Retrieved",
            data: result,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "User Lists Retrieval Failed",
            data: error.message,
        });
    }
};

export const retrivedUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await User.findById(userId)
        if (!result) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }
        res.send({
            success: true,
            message: "User successfully retrieved",
            data: result,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Failed to retrieved User",
            data: error.message,
        });
    }
};

export const updateUser = async (req, res) => {
    const { userId } = req.params;
    const updateUser = req.body;

    try {
        const result = await User.findByIdAndUpdate(userId, updateUser);
        if (!result) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }
        res.send({
            success: true,
            message: "Todo is Updated",
            data: result,
        });
    } catch (error) {
        res.status(500).send({
            success: true,
            message: "Todo is Updated",
            data: error.message,
        });
    }
};

export const deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await User.findByIdAndDelete(userId);
        if (!result) {
            return res.status(404).send({
                success: false,
                message: "User Not Found"
            });
        }
        res.send({
            success: true,
            message: "User is deleted",
            data: result
        })
    } catch (error) {
        res.send({
            success: true,
            message: "User deletion Failed",
            data: error.message
        });
    }
};