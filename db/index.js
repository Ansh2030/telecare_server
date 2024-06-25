import mongoose from "mongoose";

const connectdb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://anshsrivastavaofficial:${process.env.PASSWORD}@cluster0.s0f44iu.mongodb.net/TeleCare`);
        console.log(`MongoDB connected, host: ${mongoose.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};
export default connectdb;