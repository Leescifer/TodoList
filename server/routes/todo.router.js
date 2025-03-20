import express from "express";
import { getAllTodo, createTodo, retrievedTodo, updateTodo, deleteTodo } from "../controllers/todo.controller.js";

const router = express.Router();

// Get all
router.get("/", getAllTodo);

// Create a new todo
router.post("/", createTodo);

// Retrieve a single todo
router.get("/:todoId", retrievedTodo);

// Update a todo
router.patch("/:todoId", updateTodo);

// Delete a todo
router.delete("/:todoId", deleteTodo);

export default router;
