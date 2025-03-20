import mongoose, { Schema, model } from "mongoose";

const todoSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true, 
    },
    priority: {
        type: String,
        required: true,
        enum: ["Low", "Medium", "High"], 
        message: "Priority must be 'Low', 'Medium', 'High'",
    },
    deadline: {
        type: String, 
        required: true,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        message: "Deadline must be a valid day of the week",
    }
}, { timestamps: true });

const Todo = mongoose.models.Todo || model("Todo", todoSchema);

export default Todo; 
