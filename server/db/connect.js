import mongoose from "mongoose";

const connection = { isConnected: null };

export const connectDB = async () => {
    try {
        if (connection.isConnected) {
            console.log("Already connected!");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connection.readyState; 
        console.log("Connected to the database successfully!");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
};
