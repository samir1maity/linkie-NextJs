import mongoose from "mongoose";

const connectDB = async () => {
    console.log('process.env.DATABASE_URL', process.env.DATABASE_URL)
    mongoose.connect(process.env.DATABASE_URL as string)
};
 

export default connectDB;