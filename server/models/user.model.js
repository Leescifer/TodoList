import mongoose from "mongoose";

const personalInformation = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
});

const personalAddress = new mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true, 
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        lastLogin: {
            type: Date,
            default: Date.now,
        },
        personalInfo: personalInformation,
        address: personalAddress,
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
