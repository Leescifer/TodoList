import mongoose from "mongoose";

const personalInformation = new Schema({
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
        required: true
     },
     gender: {
        type: String,
        required: true
     }
})

const personalAddress = new Schema({
     city: {
        type: String,
        required: true
     },
     country: {
        type: String,
        required: true
     }
})


const user = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        },
    password: {
        type: String,
        required: true
    },
    lastLogin: { type: Date, default: Date.now },
    persoalInfo: personalInformation,
    address: personalAddress,
}, { timestamps: true })
