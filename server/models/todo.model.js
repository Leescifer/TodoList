import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Todo must have na owner"],
    },
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
    },
    isConpleted: {
        type: Boolean,
        defalt: false,
    },
}, { timestamps: true });

const Todo = mongoose.model("Todo", todoSchema);

export default Todo; 
