import express from "express";
import Todo from "../models/todo.model.js"; 

const router = express.Router();  
router.use(express.json()); 

// Get all todos
export const getAllTodo = async (req, res) => {
    try {
        const result = await Todo.find();
        res.send({
            success: true,
            message: "Todo Lists Retrieved",
            data: result,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Todo Lists Retrieval Failed",
            data: error.message,
        });
    }
};

// Create a new todo
export const createTodo = async (req, res) => {
    const todoDetails = req.body;
    try {
        const result = await Todo.create(todoDetails);
        res.send({
            success: true,
            message: "Todo List Created Successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Todo List Creation Failed",
            data: error.message,
        });
    }
};

// Get a todo by ID
export const retrievedTodo = async (req, res) => {
    const { todoId } = req.params;
    try {
        const result = await Todo.findById(todoId);
        if (!result) {
            return res.status(404).send({
                success: false,
                message: "Todo not found",
            });
        }
        res.send({
            success: true,
            message: "Todo successfully retrieved",
            data: result,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Failed to retrieved Todo",
            data: error.message,
        });
    }
};

//Update Todo
export const updateTodo = async (req, res) => {
    const { todoId } = req.params;
    const updatedTodo = req.body;

    try {
        const result = await Todo.findByIdAndUpdate(todoId, updatedTodo, { new: true });
        if (!result) {
            return res.status(404).send({
                success: false,
                message: "Todo not found",
            });
        }
        res.send({
            success: true,
            message: "Todo is Updated",
            data: result,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Todo is not Updated",
            data: error.message,
        });
    }
};

export const deleteTodo = async (req, res) => {
    const { todoId } = req.params

    try {
        const result = await Todo.findByIdAndDelete(todoId);
        if (!result) {
            return res.status(404).send({
                success: false,
                message: "Todo Not Found"
            });
        }
        res.send({
            succes: true,
            message: "Todo is deleted",
            data: result
        })
        
    } catch (error) {
        res.send({
            succes: true,
            message: "Todo deletion failed",
            data: error.message
        })
    }
};

