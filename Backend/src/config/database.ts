import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error("MONGODB_URI environment variable is not set");
        }
        await mongoose.connect(mongoURI);
        console.log("Mongo DB connected successfully");
    } catch (error) {
        console.error("Mongo DB connection error:", error);
        process.exit(1); //exit with failure
        //status code 1 means failure 
        //0 means success
    }
};