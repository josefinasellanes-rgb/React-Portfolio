import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    title: String,
    image: String
});

export default mongoose.model("Education", educationSchema);