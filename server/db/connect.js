import mongoose from 'mongoose'

const connectDB = async () => {
    await mongoose.connect(process.env.URI).then((res) => {
       console.log("Connected Successfully!")   
    })
}

export default connectDB;