import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./db/connect.js";
import todoRoutes from "./routes/todo.router.js"
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.router.js"

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

//Body Parser
app.use(bodyParser.json());

//Routes
app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


//Global Error Handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Internal Error Server";
    res.status(statusCode).json({ error: message });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
