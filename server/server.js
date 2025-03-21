import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import todoRoutes from "./routes/todo.router.js"
import userRoutes from "./routes/user.route.js"

dotenv.config();
connectDB();

const app = express();  

app.use(express.json());

const PORT = process.env.PORT || 3000;

//Routes
app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
